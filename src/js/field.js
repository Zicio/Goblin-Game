import goblinImage from '../img/goblin.png';

export default class Field {
  constructor(element) {
    if (!element) {
      throw new Error('Элемент не существует');
    } else {
      this.element = element;
      this.cells = [...this.element.querySelectorAll('.cell')];
      this.activeCell = null;
      this.falls = this.element.closest('.game').querySelector('.number-of-misses');
      this.score = this.element.closest('.game').querySelector('.number-of-score');
    }
    this.getGoblin();
    // this.getBanner();
    this.startOfMotion();
  }

  getRandomCell() {
    let randomCell = this.cells[Math.floor(Math.random() * this.cells.length)];
    while (this.activeCell === randomCell) {
      randomCell = this.cells[Math.floor(Math.random() * this.cells.length)];
    }
    return randomCell;
  }

  getGoblin() {
    this.goblin = document.createElement('img');
    this.goblin.classList.add('goblin');
    this.goblin.src = goblinImage;
    this.goblin.alt = 'Картинка гоблина';
    this.goblin.id = 'goblin';
    this.goblin.style = 'display: block; margin: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)';
  }

  getBanner() {
    this.banner = document.createElement('span');
    this.banner.textContent = 'You WIN';
    this.banner.style = ('text-align: center; font-size: 50px;');
  }

  appearanceOfAGoblin() {
    if (document.getElementById('goblin')) {
      document.getElementById('goblin').remove();
      this.falls.textContent = +this.falls.textContent + 1;
    }
    if (+this.falls.textContent >= 5) {
      this.gameOver('defeat');
      return;
    }
    this.activeCell = this.getRandomCell();
    this.activeCell.style.position = 'relative';
    this.activeCell.appendChild(this.goblin);
  }

  startOfMotion() {
    this.appearanceOfAGoblin();
    this.movement = setInterval(this.appearanceOfAGoblin.bind(this), 1000);
  }

  restartOfMotion() {
    clearInterval(this.movement);
    this.score.textContent = +this.score.textContent + 1;
    if (+this.score.textContent >= 5) {
      this.gameOver('win');
      return;
    }
    this.falls.textContent = +this.falls.textContent - 1;
    this.startOfMotion();
  }

  gameOver(result) {
    clearInterval(this.movement);
    if (document.getElementById('goblin')) {
      document.getElementById('goblin').remove();
    }
    // if (result === 'win') {
    //   const data = [...document.querySelector('.score-container').getElementsByTagName('p')];
    //   for (const elem of data) {
    //     elem.remove();
    //   }
    //   document.querySelector('.score-container').appendChild(this.banner);
    // }
    result === 'win' ? alert('You Win') : alert('You Lose');
    const continuations = confirm('Do you want to play again?');
    if (continuations) {
      this.score.textContent = '0';
      this.falls.textContent = '0';
      this.startOfMotion();
    }
  }
}
