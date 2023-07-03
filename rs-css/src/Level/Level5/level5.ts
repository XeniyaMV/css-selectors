import Tag from '../../Tag/tag';
import TagList from '../../Tag/tag-list';
import htmlToElement from '../../utils/htmlToElement';

const levelString = require('./level5.html');

const level5 = htmlToElement(levelString.default);
const tags: TagList[] = [];

const viewTag1 = document.createElement('div');
const viewTagName1 = document.createElement('div');
viewTag1.classList.add('view_square');
viewTagName1.classList.add('view_tag-name');
viewTag1.append(viewTagName1);
const tag1: Tag = new Tag('square', viewTag1);
const tagList = new TagList(tag1);
viewTagName1.textContent = tag1.htmlCodeString;

const viewTag2 = document.createElement('div');
const viewTagName2 = document.createElement('div');
viewTag2.classList.add('view_circle');
viewTag2.classList.add('view_element__inside');
viewTagName2.classList.add('view_tag-name');
viewTag2.append(viewTagName2);
const tag2: Tag = new Tag('circle', viewTag2);
tagList.append(tag2);
viewTagName2.textContent = tag2.htmlCodeString;
tags.push(tagList);

const viewTag3 = document.createElement('div');
const viewTagName3 = document.createElement('div');
viewTag3.classList.add('view_circle__red');
viewTagName3.classList.add('view_tag-name');
viewTag3.append(viewTagName3);
const tag3: Tag = new Tag('circle', viewTag3, undefined, 'red');
const tagList3 = new TagList(tag3);
viewTagName3.textContent = tag3.htmlCodeString;
tags.push(tagList3);

const viewTag4 = document.createElement('div');
const viewTagName4 = document.createElement('div');
viewTag4.classList.add('view_circle__red');
viewTagName4.classList.add('view_tag-name');
viewTag4.append(viewTagName4);
const tag4: Tag = new Tag('circle', viewTag4, undefined, 'red');
const tagList4 = new TagList(tag4);
viewTagName4.textContent = tag4.htmlCodeString;
tags.push(tagList4);

export { tags, level5 };
