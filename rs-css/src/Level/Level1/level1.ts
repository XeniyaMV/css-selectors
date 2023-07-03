import Tag from '../../Tag/tag';
import htmlToElement from '../../utils/htmlToElement';
import TagList from '../../Tag/tag-list';

const levelString = require('./level1.html');

const level1 = htmlToElement(levelString.default);
const tags: TagList[] = [];

for (let i = 0; i < 3; i += 1) {
  const viewTag = document.createElement('div');
  const viewTagName = document.createElement('div');
  viewTag.classList.add('view_square');
  viewTag.classList.add('view_element__animation');
  viewTagName.classList.add('view_tag-name');
  viewTag.append(viewTagName);
  const tag: Tag = new Tag('square', viewTag);
  const tagList = new TagList(tag);
  viewTagName.textContent = tag.htmlCodeString;
  tags.push(tagList);
}

export { tags, level1 };
