import '../style.scss';

import Tag from '../../Tag/tag';
import htmlToElement from '../../utils/htmlToElement';
const levelString = require('./level1.html');
// console.log(levelString.default);
const level1 = htmlToElement(levelString.default);
const tags: Tag[] = [];
for (let i = 0; i < 3; i += 1) {
  const viewTag = document.createElement('div');
  viewTag.classList.add('view_square');
  const tag: Tag = new Tag('square', viewTag);
  tags.push(tag);
}

export { tags, level1 };
