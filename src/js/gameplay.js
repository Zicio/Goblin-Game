export default class GamePlay {
  constructor(element, fieldClass) {
    if (!element) {
      throw new Error('Элемент не существует');
    } else {
      this.element = element;
      this.fieldClass = fieldClass;
      this.falls = fieldClass.falls;
    }
    this.listener();
  }

  listener() {
    this.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('goblin')) {
        this.fieldClass.restartOfMotion();
      }
    });
  }
}
