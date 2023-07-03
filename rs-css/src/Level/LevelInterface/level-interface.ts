// import Tag from '../../Tag/tag';
import TagList from '../../Tag/tag-list';

export default interface Level {
  levelHtml: HTMLElement;
  tags: TagList[];
  isCompleted: boolean;
  answer: string[];
  taskName: string;
}
