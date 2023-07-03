import Level from './level-interface';

export default interface CurrentLevel {
  currentInd: number;
  currentLevel: Level;
  listItem?: HTMLLIElement;
}
