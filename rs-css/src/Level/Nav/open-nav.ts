import './style.scss';

import levels from '../LevelsContainer/levels-container';
import htmlToElement from '../../utils/htmlToElement';

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
}

export default levelNavHTML;
