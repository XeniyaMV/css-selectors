export default function (htmlString: string): HTMLElement {
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  return <HTMLElement>template.content.firstChild;
}
