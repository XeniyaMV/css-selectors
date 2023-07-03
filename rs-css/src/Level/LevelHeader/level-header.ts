import htmlToElement from '../../utils/htmlToElement';
import levelNavHTML from '../Nav/open-nav';
import levels from '../LevelsContainer/levels-container';
import drawMainPage from '../../utils/drawMainPage';
import getCheckImg from '../../utils/getCheckImg';

const levelHeader = require('./level-header.html');
const icon = String(require('../../assets/img/left.png'));

const levelHeaderHtml = htmlToElement(levelHeader.default);
const burger = <HTMLElement>levelHeaderHtml.querySelector('.burger-menu');
const leftImg = <HTMLImageElement>(
  levelHeaderHtml.querySelector('.level_progress-navigation img')
);
const rightImg = <HTMLImageElement>leftImg.nextElementSibling;
const navList: NodeListOf<HTMLLIElement> = levelNavHTML.querySelectorAll(
  '.level-nav_list-item',
);
const navListItems: HTMLLIElement[] = Array.from(navList);

const currentValues = {
  currentInd: 0,
  currentLevel: levels[0],
  listItem: navListItems[0],
};

leftImg.src = icon;
rightImg.src = icon;

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-menu__active');
  levelNavHTML.classList.toggle('level-nav__active');
});

leftImg.addEventListener('click', () => {
  if (currentValues.currentInd !== 0) {
    currentValues.currentInd -= 1;
    currentValues.currentLevel = levels[currentValues.currentInd];
    currentValues.listItem = navListItems[currentValues.currentInd];
    drawMainPage(currentValues.currentLevel);

    const progress = <HTMLElement>levelHeaderHtml.querySelector('.progress');
    progress.textContent = `Level ${currentValues.currentInd + 1} of ${
      levels.length
    }`;
    if (progress.nextElementSibling) {
      if (!currentValues.currentLevel.isCompleted) {
        progress.nextElementSibling.remove();
      }
    } else if (currentValues.currentLevel.isCompleted) {
      const img = getCheckImg();
      const levelProgressHeader = <HTMLElement>(
        document.querySelector('.level_progress-header')
      );
      levelProgressHeader.append(img);
    }
  }
});

rightImg.addEventListener('click', () => {
  if (currentValues.currentInd !== levels.length - 1) {
    currentValues.currentInd += 1;
    currentValues.currentLevel = levels[currentValues.currentInd];
    currentValues.listItem = navListItems[currentValues.currentInd];
    drawMainPage(currentValues.currentLevel);

    const progress = <HTMLElement>levelHeaderHtml.querySelector('.progress');
    progress.textContent = `Level ${currentValues.currentInd + 1} of ${
      levels.length
    }`;
    if (progress.nextElementSibling) {
      if (!currentValues.currentLevel.isCompleted) {
        progress.nextElementSibling.remove();
      }
    } else if (currentValues.currentLevel.isCompleted) {
      const img = getCheckImg();
      const levelProgressHeader = <HTMLElement>(
        document.querySelector('.level_progress-header')
      );
      levelProgressHeader.append(img);
    }
  }
});
export { levelHeaderHtml, currentValues };
