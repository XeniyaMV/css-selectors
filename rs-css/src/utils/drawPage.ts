import drawMainPage from './drawMainPage';
import CurrentLevel from '../Level/LevelInterface/current-level-type';
import { levels } from '../Level/LevelsContainer/levels-container';
import getCheckImg from './getCheckImg';

function drawPage(currentValues: CurrentLevel): void {
  const levelHeaderHtml = <HTMLElement>(
    document.querySelector('.level_progress')
  );
  drawMainPage(currentValues.currentLevel);
  const progress = <HTMLElement>levelHeaderHtml.querySelector('.progress');
  progress.textContent = `Level ${currentValues.currentInd + 1} of ${
    levels.length
  }`;
  if (progress.nextElementSibling) {
    if (!currentValues.currentLevel.isCompleted) {
      progress.nextElementSibling.remove();
    }
  } else if (currentValues.currentLevel.isCompleted) {
    const img = getCheckImg();
    const levelProgressHeader = <HTMLElement>(
      document.querySelector('.level_progress-header')
    );
    levelProgressHeader.append(img);
  }
}

export default drawPage;
