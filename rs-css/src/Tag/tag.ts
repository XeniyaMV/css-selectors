class Tag {
  public name: string;

  public className: string;

  public id: string;

  public img: HTMLElement;

  public openedTagHtml: HTMLElement;

  public closedTagHtml: HTMLElement;

  private html: HTMLElement;

  constructor(name: string, img: HTMLElement, id?: string, className?: string) {
    this.name = name;
    this.className = className || '';
    this.id = id || '';
    this.img = img;
    this.html = this.createHtml();
    this.openedTagHtml = this.tagOpened;
    this.closedTagHtml = this.tagClosed;
    this.setImgEventListner();
    this.setOpenedTagEventListner();
    this.setClosedTagEventListner();
  }

  private setOpenedTagEventListner(): void {
    this.openedTagHtml.addEventListener('mouseover', () => {
      const tagName = this.img.querySelector('.view_tag-name');
      tagName?.classList.add('view_tag-name__active');
      this.openedTagHtml.classList.add('code-line_content__active');
      this.closedTagHtml.classList.add('code-line_content__active');
      this.img.classList.add('view_element__active');
    });

    this.openedTagHtml.addEventListener('mouseleave', () => {
      const tagName = this.img.querySelector('.view_tag-name');
      tagName?.classList.remove('view_tag-name__active');
      this.openedTagHtml.classList.remove('code-line_content__active');
      this.closedTagHtml.classList.remove('code-line_content__active');
      this.img.classList.remove('view_element__active');
    });
  }

  private setClosedTagEventListner(): void {
    this.closedTagHtml.addEventListener('mouseover', () => {
      const tagName = this.img.querySelector('.view_tag-name');
      tagName?.classList.add('view_tag-name__active');
      this.openedTagHtml.classList.add('code-line_content__active');
      this.closedTagHtml.classList.add('code-line_content__active');
      this.img.classList.add('view_element__active');
    });

    this.closedTagHtml.addEventListener('mouseleave', () => {
      const tagName = this.img.querySelector('.view_tag-name');
      tagName?.classList.remove('view_tag-name__active');
      this.openedTagHtml.classList.remove('code-line_content__active');
      this.closedTagHtml.classList.remove('code-line_content__active');
      this.img.classList.remove('view_element__active');
    });
  }

  private setImgEventListner(): void {
    this.img.addEventListener('mouseover', (event) => {
      event.stopPropagation();
      const tagName = this.img.querySelector('.view_tag-name');
      tagName?.classList.add('view_tag-name__active');
      this.openedTagHtml.classList.add('code-line_content__active');
      this.closedTagHtml.classList.add('code-line_content__active');
      this.img.classList.add('view_element__active');
    });

    this.img.addEventListener('mouseout', (event) => {
      event.stopPropagation();
      const tagName = this.img.querySelector('.view_tag-name');
      tagName?.classList.remove('view_tag-name__active');
      this.openedTagHtml.classList.remove('code-line_content__active');
      this.closedTagHtml.classList.remove('code-line_content__active');
      this.img.classList.remove('view_element__active');
    });
  }

  private createHtml(): HTMLElement {
    const htmlTag = document.createElement('span');
    htmlTag.classList.add('code-line_content');
    htmlTag.append(this.openedTagHtml);
    htmlTag.append(this.closedTagHtml);

    htmlTag.addEventListener('mouseover', () => {
      const tagName = this.img.querySelector('.view_tag-name');
      tagName?.classList.add('view_tag-name__active');
      htmlTag.classList.add('code-line_content__active');
      this.img.classList.add('view_element__active');
    });

    htmlTag.addEventListener('mouseleave', () => {
      const tagName = this.img.querySelector('.view_tag-name');
      tagName?.classList.remove('view_tag-name__active');
      htmlTag.classList.remove('code-line_content__active');
      this.img.classList.remove('view_element__active');
    });
    return htmlTag;
  }

  private get tagOpened(): HTMLElement {
    const span = document.createElement('span');
    const spanTagName = document.createElement('span');
    const spanTagOpen = document.createElement('span');
    const spanTagClose = document.createElement('span');
    const spanTagAttributes = document.createElement('span');
    let tagAttributes = '';

    span.classList.add('code-line_content');
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

  private get tagClosed(): HTMLElement {
    const span = document.createElement('span');
    const spanTagName = document.createElement('span');
    const spanTagOpen = document.createElement('span');
    const spanTagClose = document.createElement('span');

    span.classList.add('code-line_content');
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

  public get htmlCodeString(): string {
    let htmlString = `<${this.name}`;
    if (this.id !== '') {
      htmlString = htmlString.concat(` id="${this.id}"`);
    }
    if (this.className !== '') {
      htmlString = htmlString.concat(` class="${this.className}"`);
    }
    htmlString = htmlString.concat(`></${this.name}>`);
    return htmlString;
  }
}

export default Tag;
