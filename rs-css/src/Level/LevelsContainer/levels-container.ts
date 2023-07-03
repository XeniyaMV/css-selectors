import '../style.scss';

import Level from '../LevelInterface/level-interface';
import { tags as tags1, level1 } from '../Level1/level1';
import { tags as tags2, level2 } from '../Level2/level2';
import { tags as tags3, level3 } from '../Level3/level3';
import { tags as tags4, level4 } from '../Level4/level4';
import { tags as tags5, level5 } from '../Level5/level5';
// import { tags as tags6, level6 } from '../Level6/level6';
// import { tags as tags7, level7 } from '../Level7/level7';
// import { tags as tags8, level8 } from '../Level8/level8';
// import { tags as tags9, level9 } from '../Level9/level9';
// import { tags as tags10, level10 } from '../Level10/level10';
import LevelTaskAnswers from '../level-task-answers';
import LevelTaskNames from '../level-task-names';
import CurrentLevel from '../LevelInterface/current-level-type';

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
levels.push({
  levelHtml: level3,
  tags: tags3,
  isCompleted: false,
  answer: LevelTaskAnswers.LevelTask3,
  taskName: LevelTaskNames.LevelTask3,
});
levels.push({
  levelHtml: level4,
  tags: tags4,
  isCompleted: false,
  answer: LevelTaskAnswers.LevelTask4,
  taskName: LevelTaskNames.LevelTask4,
});
levels.push({
  levelHtml: level5,
  tags: tags5,
  isCompleted: false,
  answer: LevelTaskAnswers.LevelTask5,
  taskName: LevelTaskNames.LevelTask5,
});
// levels.push({
//   levelHtml: level6,
//   tags: tags6,
//   isCompleted: false,
//   answer: LevelTaskAnswers.LevelTask6,
//   taskName: LevelTaskNames.LevelTask6,
// });
// levels.push({
//   levelHtml: level7,
//   tags: tags7,
//   isCompleted: false,
//   answer: LevelTaskAnswers.LevelTask7,
//   taskName: LevelTaskNames.LevelTask7,
// });
// levels.push({
//   levelHtml: level8,
//   tags: tags8,
//   isCompleted: false,
//   answer: LevelTaskAnswers.LevelTask8,
//   taskName: LevelTaskNames.LevelTask8,
// });
// levels.push({
//   levelHtml: level9,
//   tags: tags9,
//   isCompleted: false,
//   answer: LevelTaskAnswers.LevelTask9,
//   taskName: LevelTaskNames.LevelTask9,
// });
// levels.push({
//   levelHtml: level10,
//   tags: tags10,
//   isCompleted: false,
//   answer: LevelTaskAnswers.LevelTask10,
//   taskName: LevelTaskNames.LevelTask10,
// });

const currentValues: CurrentLevel = {
  currentInd: 0,
  currentLevel: levels[0],
};
export { levels, currentValues };
