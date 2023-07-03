import Level from '../Level/LevelInterface/level-interface';

function drawMainPage(currentLevel: Level): void {
  const view = <HTMLElement>document.querySelector('.view_game');
  const viewTask = <HTMLElement>document.querySelector('.view_task');
  const code = <HTMLElement>document.querySelector('.html-viewer .code');
  const codeFirstLine = <HTMLElement>(
    document.querySelector('.html-viewer .code .code-line:first-child')
  );
  const codeLastLine = <HTMLElement>(
    document.querySelector('.html-viewer .code .code-line:last-child')
  );
  const level = <HTMLElement>document.querySelector('.level-container');

  viewTask.textContent = currentLevel.taskName;
  view.innerHTML = '';
  code.innerHTML = '';

  code.append(codeFirstLine);
  for (let i = 0; i < currentLevel.tags.length; i += 1) {
    const liOpendArray = currentLevel.tags[i].getHtmlOpendTagList();
    const liClosedArray = currentLevel.tags[i].getHtmlClosedTagList();
    const img = currentLevel.tags[i].getHtmlImg();

    view.append(img);
    code.append(...liOpendArray);
    code.append(...liClosedArray);
  }
  code.append(codeLastLine);

  if (level.querySelector('.level')) {
    level.querySelector('.level')?.remove();
  }
  level.append(currentLevel.levelHtml);
}

export default drawMainPage;
