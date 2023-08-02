class ActiveProjects extends Component {
  constructor(renderHookId) {
    super(renderHookId);
    this.finishBtn = document.querySelector("ul button:first-of-type");
    console.log(this.finishBtn);
  }
}

const projects = new ActiveProjects();

class FinishedProjects extends Component {
  constructor(renderHookId) {
    super(renderHookId);
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
    // this.render()
  }

  createRootElement(tag, classes, attributes) {
    const rootElement = document.createElement(tag);
    if (classes) {
      rootElement.className = classes;
    }
    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        rootElement.setAttribute(attribute.name, attribute.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}
