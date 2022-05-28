import { v4 } from "uuid";

class Project {
  #id;
  #title;
  #todoList;

  constructor({ title, todoList = [] }) {
    this.#id = v4();
    this.title = title;
    this.#todoList = todoList;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title || this.title;
  }

  get todoList() {
    return [...this.#todoList];
  }

  addTodo(todo) {
    this.#todoList.push(todo);
  }

  removeTodo(id) {
    const index = this.#todoList.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.#todoList.splice(index, 1);
    }
  }
}

export default Project;
