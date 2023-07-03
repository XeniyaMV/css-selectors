import './style.scss';

import { levels, currentValues } from '../LevelsContainer/levels-container';
import htmlToElement from '../../utils/htmlToElement';
import drawPage from '../../utils/drawPage';

const levelNav = require('./open-nav.html');

const levelNavHTML = htmlToElement(levelNav.default);
const levelTaskList = levelNavHTML.querySelector('.level-nav_list');

for (let i = 0; i < levels.length; i += 1) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.classList.add('level-nav_list-item');
  span.classList.add('level-nav_list-item-content');
  span.textContent = levels[i].taskName;
  li.append(span);
  levelTaskList?.append(li);

  li.addEventListener('click', () => {
    console.log(currentValues);
    currentValues.currentInd = i;
    currentValues.currentLevel = levels[i];
    currentValues.listItem = li;
    drawPage(currentValues);
    console.log(currentValues);
  });
}

export default levelNavHTML;
