import Tag from '../../Tag/tag';
import TagList from '../../Tag/tag-list';
import htmlToElement from '../../utils/htmlToElement';

const levelString = require('./level4.html');

const level4 = htmlToElement(levelString.default);
const tags: TagList[] = [];

const viewTag1 = document.createElement('div');
const viewTagName1 = document.createElement('div');
viewTag1.classList.add('view_square__red');
viewTag1.classList.add('view_element__animation');
viewTagName1.classList.add('view_tag-name');
viewTag1.append(viewTagName1);
const tag1: Tag = new Tag('square', viewTag1, undefined, 'red');
const tagList1 = new TagList(tag1);
viewTagName1.textContent = tag1.htmlCodeString;
tags.push(tagList1);

const viewTag2 = document.createElement('div');
const viewTagName2 = document.createElement('div');
viewTag2.classList.add('view_circle');
viewTagName2.classList.add('view_tag-name');
viewTag2.append(viewTagName2);
const tag2: Tag = new Tag('circle', viewTag2);
const tagList2 = new TagList(tag2);
viewTagName2.textContent = tag2.htmlCodeString;
tags.push(tagList2);

const viewTag3 = document.createElement('div');
const viewTagName3 = document.createElement('div');
viewTag3.classList.add('view_circle__red');
viewTag3.classList.add('view_element__animation');
viewTagName3.classList.add('view_tag-name');
viewTag3.append(viewTagName3);
const tag3: Tag = new Tag('circle', viewTag3, undefined, 'red');
const tagList3 = new TagList(tag3);
viewTagName3.textContent = tag3.htmlCodeString;
tags.push(tagList3);

export { tags, level4 };
