import Tag from '../../Tag/tag';
import htmlToElement from '../../utils/htmlToElement';

const levelString = require('./level7.html');

const level7 = htmlToElement(levelString.default);
const tags: Tag[] = [];

for (let i = 0; i < 3; i += 1) {
  const viewTag = document.createElement('div');
  const viewTagName = document.createElement('div');
  if (i !== 1) {
    viewTag.classList.add('view_square');
    viewTagName.classList.add('view_tag-name');
    viewTag.append(viewTagName);
    const tag: Tag = new Tag('square', viewTag);
    viewTagName.textContent = tag.htmlCodeString;
    tags.push(tag);
  } else {
    viewTag.classList.add('view_square__yellow');
    viewTagName.classList.add('view_tag-name');
    viewTag.append(viewTagName);
    const tag: Tag = new Tag('square', viewTag, 'yellow');
    viewTagName.textContent = tag.htmlCodeString;
    tags.push(tag);
  }
}

export { tags, level7 };
