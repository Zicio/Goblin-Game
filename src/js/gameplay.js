export default class GamePlay {
  constructor(element, fieldClass) {
    if (!element || fieldClass) {
      throw new Error('Элемент не существует');
    } else {
      this.element = element;
      this.fieldClass = fieldClass;
    }
    this.listenerOfButton();
    this.listenerOfGoblin();
  }

  listenerOfButton() {
    this.element.addEventListener('click', this.clickOnButton.bind(this));
  }

  listenerOfGoblin() {
    this.element.addEventListener('click', this.clickOnGoblin.bind(this));
  }

  clickOnButton(e) {
    if (e.target.classList.contains('button')) {
      this.fieldClass.startGame();
    }
  }

  clickOnGoblin(e) {
    if (e.target.classList.contains('goblin')) {
      this.fieldClass.restartOfMotion();
    }
  }
}

