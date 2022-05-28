import UI from "./UI";
import Project from "./Model/Project";
import ProjectsList from "./Model/ProjectList";

class Controller {
  static #defaultProjects;
  static #userProjects;

  static init(root, modalRoot) {
    Controller.#defaultProjects = new ProjectsList();
    console.log(Controller.#defaultProjects);
    Controller.#defaultProjects.addProject(new Project({ title: "My TODOs" }));
    Controller.#defaultProjects.addProject(new Project({ title: "Today" }));
    Controller.#defaultProjects.addProject(new Project({ title: "This Week" }));

    Controller.#userProjects = new ProjectsList();
    Controller.#userProjects.addProject(new Project({ title: "My Notes" }));

    UI.init(root, modalRoot);
  }

  static get defaultProjects() {
    console.log("Get Projects Default");
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
