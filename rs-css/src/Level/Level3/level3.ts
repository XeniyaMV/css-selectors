import Tag from '../../Tag/tag';
import TagList from '../../Tag/tag-list';
import htmlToElement from '../../utils/htmlToElement';

const levelString = require('./level3.html');

const level3 = htmlToElement(levelString.default);
const tags: TagList[] = [];

for (let i = 0; i < 3; i += 1) {
  const viewTag = document.createElement('div');
  const viewTagName = document.createElement('div');
  if (i === 0) {
    viewTag.classList.add('view_circle');
    viewTagName.classList.add('view_tag-name');
    viewTag.append(viewTagName);
    const tag: Tag = new Tag('circle', viewTag);
    const tagList = new TagList(tag);
    viewTagName.textContent = tag.htmlCodeString;
    tags.push(tagList);
  } else {
    viewTag.classList.add('view_circle__red');
    viewTagName.classList.add('view_tag-name');
    viewTag.append(viewTagName);
    const tag: Tag = new Tag('circle', viewTag, undefined, 'red');
    const tagList = new TagList(tag);
    viewTagName.textContent = tag.htmlCodeString;
    tags.push(tagList);
  }
}

export { tags, level3 };
