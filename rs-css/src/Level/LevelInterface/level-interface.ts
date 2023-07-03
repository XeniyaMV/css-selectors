import Tag from '../../Tag/tag';

export default interface Level {
  levelHtml: HTMLElement;
  tags: Tag[];
  isCompleted: boolean;
  answer: string;
  taskName: string;
}
