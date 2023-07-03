import Level from '../Level/LevelInterface/level-interface';

function drawMainPage(currentLevel: Level): void {
  const view = <HTMLElement>document.querySelector('.view_game');
  const viewTask = <HTMLElement>document.querySelector('.view_task');
  const code = <HTMLElement>document.querySelector('.html-viewer .code');
  const level = <HTMLElement>document.querySelector('.level-container');

  viewTask.textContent = currentLevel.taskName;
  view.innerHTML = '';
  code.innerHTML = '';

  for (let i = 0; i < currentLevel.tags.length; i += 1) {
    const li = <HTMLElement>document.createElement('li');
    li.classList.add('code-line');
    view.append(currentLevel.tags[i].img);
    li.append(currentLevel.tags[i].htmlCode);
    code.append(li);
  }
  if (level.querySelector('.level')) {
    level.querySelector('.level')?.remove();
  }
  level.append(currentLevel.levelHtml);
}

export default drawMainPage;
