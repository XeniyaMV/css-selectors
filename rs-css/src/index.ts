import './styles/style.scss';
import tags from './Level1/level1';

// const mainBackground = String(require('./assets/img/main_background.jpg'));

// const page = <HTMLElement>document.querySelector('.page');
// page.style.backgroundImage = `url(${mainBackground})`;

const view = <HTMLElement>document.querySelector('.view_game');
const code = <HTMLElement>document.querySelector('.code');

for (let i = 0; i < tags.length; i += 1) {
  const li = <HTMLElement>document.createElement('li');
  li.classList.add('code-line');
  view.append(tags[i].img);
  li.append(tags[i].htmlCode);
  code.append(li);
}
