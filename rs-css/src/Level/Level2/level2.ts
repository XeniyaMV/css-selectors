import Tag from '../../Tag/tag';
import TagList from '../../Tag/tag-list';
import htmlToElement from '../../utils/htmlToElement';

const levelString = require('./level2.html');

const level2 = htmlToElement(levelString.default);
const tags: TagList[] = [];

for (let i = 0; i < 3; i += 1) {
  const viewTag = document.createElement('div');
  const viewTagName = document.createElement('div');
  if (i !== 1) {
    viewTag.classList.add('view_square');
    viewTagName.classList.add('view_tag-name');
    viewTag.append(viewTagName);
    const tag: Tag = new Tag('square', viewTag);
    const tagList = new TagList(tag);
    viewTagName.textContent = tag.htmlCodeString;
    tags.push(tagList);
  } else {
    viewTag.classList.add('view_square__yellow');
    viewTag.classList.add('view_element__animation');
    viewTagName.classList.add('view_tag-name');
    viewTag.append(viewTagName);
    const tag: Tag = new Tag('square', viewTag, 'yellow');
    const tagList = new TagList(tag);
    viewTagName.textContent = tag.htmlCodeString;
    tags.push(tagList);
  }
}

export { tags, level2 };
