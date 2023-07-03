import htmlToElement from '../../utils/htmlToElement';
import levelNavHTML from '../Nav/open-nav';
import { levels, currentValues } from '../LevelsContainer/levels-container';
import drawPage from '../../utils/drawPage';

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

[currentValues.listItem] = navListItems;
currentValues.listItem.classList.add('level-nav_list-item__active');

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
    currentValues.listItem?.classList.remove('level-nav_list-item__active');
    currentValues.listItem = navListItems[currentValues.currentInd];
    currentValues.listItem?.classList.add('level-nav_list-item__active');
    drawPage(currentValues);
  }
});

rightImg.addEventListener('click', () => {
  if (currentValues.currentInd !== levels.length - 1) {
    currentValues.currentInd += 1;
    currentValues.currentLevel = levels[currentValues.currentInd];
    currentValues.listItem?.classList.remove('level-nav_list-item__active');
    currentValues.listItem = navListItems[currentValues.currentInd];
    currentValues.listItem?.classList.add('level-nav_list-item__active');
    drawPage(currentValues);
  }
});
export default levelHeaderHtml;
