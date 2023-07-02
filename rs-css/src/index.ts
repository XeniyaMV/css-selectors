import './styles/style.scss';
import { tags, level1 } from './Level/Level1/level1';
import LevelTaskNames from './Level/level-task-names';
import LevelTaskAnswers from './Level/level-task-answers';

// const mainBackground = String(require('./assets/img/main_background.jpg'));
const check = String(require('./assets/img/check.png'));

// const page = <HTMLElement>document.querySelector('.page');
// page.style.backgroundImage = `url(${mainBackground})`;

const view = <HTMLElement>document.querySelector('.view_game');
const viewTask = <HTMLElement>document.querySelector('.view_task');
const code = <HTMLElement>document.querySelector('.html-viewer .code');
const level = <HTMLElement>document.querySelector('.level-container');
const answer = <HTMLInputElement>document.querySelector('.answer');
const answerSubmit = <HTMLElement>document.querySelector('.answer-submit');

viewTask.textContent = LevelTaskNames.LevelTask1;
view.innerHTML = '';
code.innerHTML = '';
level.innerHTML = '';

for (let i = 0; i < tags.length; i += 1) {
  const li = <HTMLElement>document.createElement('li');
  li.classList.add('code-line');
  view.append(tags[i].img);
  li.append(tags[i].htmlCode);
  code.append(li);
}
level.append(level1);

answerSubmit.addEventListener('click', () => {
  if (answer.value.trim().toLowerCase() === LevelTaskAnswers.LevelTask1) {
    console.log('good!');
    const levelProgressHeader = <HTMLElement>(
      document.querySelector('.level_progress-header')
    );
    if (!levelProgressHeader.querySelector('img')) {
      const img = document.createElement('img');
      img.classList.add('check-icon');
      img.alt = 'check';
      img.src = check;
      levelProgressHeader.append(img);
    }
  } else {
    console.log('Oops..');
  }
  answer.value = '';
});

answer.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (answer.value.trim().toLowerCase() === LevelTaskAnswers.LevelTask1) {
      console.log('good!');
      const levelProgressHeader = <HTMLElement>(
        document.querySelector('.level_progress-header')
      );
      if (!levelProgressHeader.querySelector('img')) {
        const img = document.createElement('img');
        img.classList.add('check-icon');
        img.alt = 'check';
        img.src = check;
        levelProgressHeader.append(img);
      }
    } else {
      console.log('Oops..');
    }
    answer.value = '';
  }
});
answer.addEventListener('keyup', () => {
  if (answer.value !== '') {
    answer.classList.remove('answer__animation');
  } else {
    answer.classList.add('answer__animation');
  }
});
