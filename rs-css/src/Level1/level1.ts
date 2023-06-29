import Tag from '../Tag/tag';

const tags: Tag[] = [];
for (let i = 0; i < 3; i += 1) {
  const viewTag = document.createElement('div');
  viewTag.classList.add('view_square');
  const tag: Tag = new Tag('square', viewTag);
  tags.push(tag);
}

export default tags;
