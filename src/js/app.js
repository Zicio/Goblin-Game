import '../css/style.css';
import Field from './field';
import GamePlay from './gameplay';

const field = document.querySelector('.cells-container');
const game = document.querySelector('.game');
const fieldClass = new Field(field);
const gamePlay = new GamePlay(game, fieldClass);
