import UI from "./UI";
import Project from "./Model/Project";
import ProjectsList from "./Model/ProjectList";
import Todo from "./Model/Todo";

class Controller {
  static #defaultProjects;
  static #userProjects;

  static init(root, modalRoot) {
    Controller.#defaultProjects = new ProjectsList();
    Controller.#defaultProjects.addProject(new Project({ title: "My TODOs" }));

    Controller.#defaultProjects.projects[0].addTodo(new Todo({ title: "My Todo", description: "My Test 1", dueDate: Date.now(), priority: Todo.PRIORITIES.IMPORTANT }));
    Controller.#defaultProjects.projects[0].addTodo(new Todo({ title: "My Todo", description: "My Test 2", dueDate: Date.now(), priority: Todo.PRIORITIES.IMPORTANT }));
    Controller.#defaultProjects.projects[0].addTodo(new Todo({ title: "My Todo", description: "My Test 3", dueDate: Date.now(), priority: Todo.PRIORITIES.IMPORTANT }));

    Controller.#userProjects = new ProjectsList();
    Controller.#userProjects.addProject(new Project({ title: "My Notes" }));

    UI.init(root, modalRoot);
  }

  static get defaultProjects() {
    return Controller.#defaultProjects;
  }

  static set defaultProjects(projects) {
    Controller.#defaultProjects = projects;
  }

  static get userProjects() {
    return Controller.#userProjects;
  }

  static set userProjects(projects) {
    Controller.#userProjects = projects;
  }

  static getProjectById(id) {
    let idProject = null;

    for (const project of Controller.#defaultProjects.projects) {
      if (project.id === id) {
        idProject = project;
        break;
      }
    }

    if (idProject !== null) {
      return idProject;
    }

    for (const project of Controller.#userProjects.projects) {
      if (project.id === id) {
        idProject = project;
        break;
      }
    }

    return idProject;
  }

  static addUserProject(title) {
    Controller.#userProjects.addProject(new Project({ title }));
    UI.render();
  }

  static deleteUserProject(id) {
    Controller.#userProjects.removeProject(id);

    if (UI.activeMenuItem === id) {
      UI.activeMenuItem = Controller.#defaultProjects.projects[0].id;
    }

    UI.render();
  }

  static isProjectTitleAvailable(title) {
    const defaultIndex = Controller.#defaultProjects.projects.findIndex((item) => item.title.toLowerCase() === title.toLowerCase());
    const userIndex = Controller.#userProjects.projects.findIndex((item) => item.title.toLowerCase() === title.toLowerCase());

    return defaultIndex === -1 && userIndex === -1;
  }
}

export default Controller;
