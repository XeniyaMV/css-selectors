export default function htmlToElement(htmlString: string): HTMLElement {
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  return <HTMLElement>template.content.firstChild;
}
