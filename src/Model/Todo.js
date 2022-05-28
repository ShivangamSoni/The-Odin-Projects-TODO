import { v4 } from "uuid";

class Todo {
  #id;
  #title;
  #description;
  #dueDate;
  #isComplete;
  #priority;

  static PRIORITIES = Object.freeze({
    IMPORTANT: "imp",
  });

  constructor({ title, description, dueDate = new Date(), priority }) {
    this.#id = v4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.#isComplete = false;
    this.priority = priority;
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

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description || this.description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  get priority() {
    return this.#priority;
  }

  set priority(priority) {
    if (Object.values(Todo.PRIORITIES).indexOf(priority) !== -1) {
      this.#priority = priority;
    }
  }

  get isComplete() {
    return this.#isComplete;
  }

  toggleComplete() {
    this.#isComplete = !this.isComplete;
  }
}

export default Todo;
