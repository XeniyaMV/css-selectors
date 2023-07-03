const check = String(require('../assets/img/check.png'));

function getCheckImg(): HTMLImageElement {
  const img = document.createElement('img');
  img.classList.add('check-icon');
  img.alt = 'check';
  img.src = check;
  return img;
}

export default getCheckImg;
