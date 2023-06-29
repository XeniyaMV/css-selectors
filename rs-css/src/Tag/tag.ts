class Tag {
  public name: string;

  public className: string;

  public id: string;

  public img: HTMLElement;

  private html: HTMLElement;

  constructor(name: string, img: HTMLElement, id?: string, className?: string) {
    this.name = name;
    this.className = className || '';
    this.id = id || '';
    this.img = img;
    this.html = this.createHtml();
  }

  private createHtml(): HTMLElement {
    const htmlTag = document.createElement('span');
    htmlTag.classList.add('code-line_content');
    console.log(this.tagOpenedString);
    htmlTag.append(this.tagOpenedString);
    htmlTag.append(this.tagClosedString);
    return htmlTag;
  }

  private get tagOpenedString(): HTMLElement {
    const span = document.createElement('span');
    const spanTagName = document.createElement('span');
    const spanTagOpen = document.createElement('span');
    const spanTagClose = document.createElement('span');
    const spanTagAttributes = document.createElement('span');
    let tagAttributes = '';

    spanTagName.classList.add('tag-name');
    spanTagOpen.classList.add('tag-open');
    spanTagClose.classList.add('tag-close');
    spanTagAttributes.classList.add('tag-attributes');

    spanTagName.textContent = this.name;
    spanTagOpen.textContent = '<';
    spanTagClose.textContent = '>';

    if (this.id !== '') {
      tagAttributes = tagAttributes.concat(` id="${this.id}"`);
    }
    if (this.className !== '') {
      tagAttributes = tagAttributes.concat(` class="${this.className}"`);
    }
    spanTagAttributes.textContent = tagAttributes;
    span.append(spanTagOpen);
    span.append(spanTagName);
    span.append(spanTagAttributes);
    span.append(spanTagClose);
    return span;
  }

  private get tagClosedString(): HTMLElement {
    const span = document.createElement('span');
    const spanTagName = document.createElement('span');
    const spanTagOpen = document.createElement('span');
    const spanTagClose = document.createElement('span');

    spanTagName.classList.add('tag-name');
    spanTagOpen.classList.add('tag-open');
    spanTagClose.classList.add('tag-close');

    spanTagName.textContent = this.name;
    spanTagOpen.textContent = '</';
    spanTagClose.textContent = '>';

    span.append(spanTagOpen);
    span.append(spanTagName);
    span.append(spanTagClose);
    return span;
  }

  public get htmlCode(): HTMLElement {
    return this.html;
  }
}

export default Tag;
