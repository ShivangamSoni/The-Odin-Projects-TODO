class ProjectsList {
  #projects;

  constructor() {
    this.#projects = [];
  }

  addProject(project) {
    this.#projects.push(project);
  }

  removeProject(id) {
    const index = this.#projects.findIndex((project) => project.id === id);
    if (index !== -1) {
      this.#projects.splice(index, 1);
    }
  }

  get projects() {
    return [...this.#projects];
  }
}

export default ProjectsList;
