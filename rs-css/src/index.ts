import './styles/style.scss';

import {
  levelHeaderHtml,
  currentValues,
} from './Level/LevelHeader/level-header';
import levelNavHTML from './Level/Nav/open-nav';
import levels from './Level/LevelsContainer/levels-container';
import getCheckImg from './utils/getCheckImg';
import drawMainPage from './utils/drawMainPage';

const level = <HTMLElement>document.querySelector('.level-container');
const answer = <HTMLInputElement>document.querySelector('.answer');
const answerSubmit = <HTMLElement>document.querySelector('.answer-submit');

level.append(levelNavHTML);
level.append(levelHeaderHtml);

const progress = <HTMLElement>levelHeaderHtml.querySelector('.progress');
progress.textContent = `Level ${1} of ${levels.length}`;

drawMainPage(currentValues.currentLevel);

answerSubmit.addEventListener('click', () => {
  const gameField = <HTMLElement>document.querySelector('.game-field');
  if (answer.value.trim().toLowerCase() === currentValues.currentLevel.answer) {
    const levelProgressHeader = <HTMLElement>(
      document.querySelector('.level_progress-header')
    );
    if (!levelProgressHeader.querySelector('img')) {
      const imgProgress = getCheckImg();
      const imgNav = getCheckImg();
      levelProgressHeader.append(imgProgress);
      currentValues.listItem.append(imgNav);
      currentValues.currentLevel.isCompleted = true;
    }
  } else {
    gameField.classList.add('game-field__mistake');
    setTimeout(() => {
      gameField.classList.remove('game-field__mistake');
    }, 450);
  }
  answer.value = '';
});

answer.addEventListener('keypress', (event) => {
  const gameField = <HTMLElement>document.querySelector('.game-field');
  gameField.classList.remove('game-field__mistake');
  if (event.key === 'Enter') {
    if (
      answer.value.trim().toLowerCase() === currentValues.currentLevel.answer
    ) {
      const levelProgressHeader = <HTMLElement>(
        document.querySelector('.level_progress-header')
      );
      if (!levelProgressHeader.querySelector('img')) {
        const imgProgress = getCheckImg();
        const imgNav = getCheckImg();
        levelProgressHeader.append(imgProgress);
        currentValues.listItem.append(imgNav);
        currentValues.currentLevel.isCompleted = true;
      }
    } else {
      gameField.classList.add('game-field__mistake');
      setTimeout(() => {
        gameField.classList.remove('game-field__mistake');
      }, 450);
    }
    answer.value = '';
  }
});

answer.addEventListener('keyup', () => {
  if (answer.value !== '') {
    answer.classList.remove('answer__animation');
  } else {
    answer.classList.add('answer__animation');
  }
});
