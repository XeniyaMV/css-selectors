import './style.scss';

import { levels, currentValues } from '../LevelsContainer/levels-container';
import htmlToElement from '../../utils/htmlToElement';
import drawPage from '../../utils/drawPage';

const levelNav = require('./open-nav.html');

const levelNavHTML = htmlToElement(levelNav.default);
const levelTaskList = levelNavHTML.querySelector('.level-nav_list');
const resetButton = levelNavHTML.querySelector('.level-nav_button');

for (let i = 0; i < levels.length; i += 1) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.classList.add('level-nav_list-item');
  span.classList.add('level-nav_list-item-content');
  span.textContent = levels[i].taskName;
  li.append(span);
  levelTaskList?.append(li);

  li.addEventListener('click', () => {
    currentValues.currentInd = i;
    currentValues.currentLevel = levels[i];
    currentValues.listItem?.classList.remove('level-nav_list-item__active');
    currentValues.listItem = li;
    li.classList.add('level-nav_list-item__active');
    drawPage(currentValues);
  });
}

resetButton?.addEventListener('click', () => {
  const liArray: NodeListOf<HTMLLIElement> = levelNavHTML.querySelectorAll(
    '.level-nav_list-item',
  );
  const navListItems: HTMLLIElement[] = Array.from(liArray);
  for (let i = 0; i < levels.length; i += 1) {
    const viewGame = <HTMLElement>document.querySelector('.view_game');
    levels[i].isCompleted = false;
    if (navListItems[i].querySelector('.check-icon')) {
      navListItems[i].querySelector('.check-icon')?.remove();
    }
    if (viewGame.classList.contains('view_game__completed')) {
      viewGame.classList.remove('view_game__completed');
      viewGame.previousElementSibling?.remove();
    }
  }
});

export default levelNavHTML;
