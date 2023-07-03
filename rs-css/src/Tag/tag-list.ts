import Tag from './tag';

type Node = {
  prev: Node | null;
  data: Tag;
  next: Node | null;
};

class TagList {
  public head: Node | null;

  public tail: Node | null;

  private length: number;

  constructor(head: Tag) {
    this.head = <Node>{
      prev: null,
      data: head,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  public isEmpty(): boolean {
    return this.head === null;
  }

  public append(data: Tag): void {
    const newNode = <Node>{
      prev: this.tail,
      data,
      next: null,
    };

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      if (this.tail !== null) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
      this.length += 1;
    }
  }

  public getHtmlImg(): HTMLElement {
    let currentNode = this.head;
    const img = <HTMLElement>currentNode?.data.img;
    if (currentNode?.next !== undefined) {
      currentNode = currentNode?.next;
    }
    while (currentNode !== null) {
      img?.append(currentNode.data.img);
      currentNode = currentNode.next;
    }
    return img;
  }

  public getHtmlOpendTagList(): HTMLLIElement[] {
    const liArray: HTMLLIElement[] = [];
    let space = '  ';
    let currentNode = this.head;
    while (currentNode !== null) {
      const li = document.createElement('li');
      const pre = <HTMLElement>document.createElement('pre');
      pre.style.display = 'inline';
      pre.textContent = space;
      li.classList.add('code-line');
      li.append(pre);
      li.append(currentNode.data.openedTagHtml);
      liArray.push(li);
      space = space.concat('  ');
      currentNode = currentNode.next;
    }
    return liArray;
  }

  public getHtmlClosedTagList(): HTMLLIElement[] {
    const liArray: HTMLLIElement[] = [];
    let space = '  ';
    let currentNode = this.tail;
    space = space.repeat(this.length);
    while (currentNode !== null) {
      const li = document.createElement('li');
      const pre = <HTMLElement>document.createElement('pre');
      pre.style.display = 'inline';
      pre.textContent = space;
      li.classList.add('code-line');
      li.append(pre);
      li.append(currentNode.data.closedTagHtml);
      liArray.push(li);
      space = space.slice(0, space.length - 2);
      currentNode = currentNode.prev;
    }
    return liArray;
  }
}

export default TagList;
