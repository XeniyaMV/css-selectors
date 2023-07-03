import './styles/style.scss';

import levelHeaderHtml from './Level/LevelHeader/level-header';
import levelNavHTML from './Level/Nav/open-nav';
import {
  levels,
  currentValues,
} from './Level/LevelsContainer/levels-container';
import getCheckImg from './utils/getCheckImg';
import drawMainPage from './utils/drawMainPage';
import drawPage from './utils/drawPage';

const logo = String(require('./assets/img/rs_school_js.svg'));

const level = <HTMLElement>document.querySelector('.level-container');
const answer = <HTMLInputElement>document.querySelector('.answer');
const answerSubmit = <HTMLElement>document.querySelector('.answer-submit');
const schoolLogo = <HTMLImageElement>document.querySelector('.school-logo');
const navList: NodeListOf<HTMLLIElement> = levelNavHTML.querySelectorAll(
  '.level-nav_list-item',
);
const navListItems: HTMLLIElement[] = Array.from(navList);

schoolLogo.src = logo;

level.append(levelNavHTML);
level.append(levelHeaderHtml);

const progress = <HTMLElement>levelHeaderHtml.querySelector('.progress');
progress.textContent = `Level ${1} of ${levels.length}`;

drawMainPage(currentValues.currentLevel);

answerSubmit.addEventListener('click', () => {
  const gameField = <HTMLElement>document.querySelector('.game-field');
  const value = answer.value.trim().toLowerCase();
  if (currentValues.currentLevel.answer.indexOf(value) !== -1) {
    const levelProgressHeader = <HTMLElement>(
      document.querySelector('.level_progress-header')
    );
    const viewGame = <HTMLElement>document.querySelector('.view_game');
    viewGame.classList.add('view_game__completed');
    if (!levelProgressHeader.querySelector('img')) {
      const imgProgress = getCheckImg();
      const imgNav = getCheckImg();
      levelProgressHeader.append(imgProgress);
      if (currentValues.listItem) {
        currentValues.listItem.prepend(imgNav);
      }
      currentValues.currentLevel.isCompleted = true;

      setTimeout(() => {
        let flag = true;
        for (let i = 0; i < levels.length; i += 1) {
          if (!levels[i].isCompleted) {
            flag = false;
            currentValues.currentInd = i;
            currentValues.currentLevel = levels[currentValues.currentInd];
            currentValues.listItem?.classList.remove(
              'level-nav_list-item__active',
            );
            currentValues.listItem = navListItems[currentValues.currentInd];
            currentValues.listItem?.classList.add(
              'level-nav_list-item__active',
            );
            drawPage(currentValues);
            viewGame.classList.remove('view_game__completed');
            break;
          }
        }
        if (flag) {
          const div = <HTMLElement>document.createElement('div');
          div.classList.add('win-message');
          div.textContent = 'Congratulation!';
          viewGame.before(div);
        }
      }, 500);
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
  const value = answer.value.trim().toLowerCase();
  if (event.key === 'Enter') {
    if (currentValues.currentLevel.answer.indexOf(value) !== -1) {
      const levelProgressHeader = <HTMLElement>(
        document.querySelector('.level_progress-header')
      );
      const viewGame = <HTMLElement>document.querySelector('.view_game');
      viewGame.classList.add('view_game__completed');
      if (!levelProgressHeader.querySelector('img')) {
        const imgProgress = getCheckImg();
        const imgNav = getCheckImg();
        levelProgressHeader.append(imgProgress);
        if (currentValues.listItem) {
          currentValues.listItem.prepend(imgNav);
        }
        currentValues.currentLevel.isCompleted = true;
        setTimeout(() => {
          let flag = true;
          for (let i = 0; i < levels.length; i += 1) {
            if (!levels[i].isCompleted) {
              flag = false;
              currentValues.currentInd = i;
              currentValues.currentLevel = levels[currentValues.currentInd];
              currentValues.listItem?.classList.remove(
                'level-nav_list-item__active',
              );
              currentValues.listItem = navListItems[currentValues.currentInd];
              currentValues.listItem?.classList.add(
                'level-nav_list-item__active',
              );
              drawPage(currentValues);
              viewGame.classList.remove('view_game__completed');
              break;
            }
          }
          if (flag) {
            const div = <HTMLElement>document.createElement('pre');
            div.classList.add('win-message');
            div.textContent = 'Congratulation!\nYou have completed the course!';
            viewGame.before(div);
          }
        }, 500);
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
