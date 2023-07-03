import '../style.scss';

import Level from '../LevelInterface/level-interface';
import { tags as tags1, level1 } from '../Level1/level1';
import { tags as tags2, level2 } from '../Level2/level2';
import LevelTaskAnswers from '../level-task-answers';
import LevelTaskNames from '../level-task-names';

const levels: Level[] = [];
levels.push({
  levelHtml: level1,
  tags: tags1,
  isCompleted: false,
  answer: LevelTaskAnswers.LevelTask1,
  taskName: LevelTaskNames.LevelTask1,
});
levels.push({
  levelHtml: level2,
  tags: tags2,
  isCompleted: false,
  answer: LevelTaskAnswers.LevelTask2,
  taskName: LevelTaskNames.LevelTask2,
});

export default levels;
