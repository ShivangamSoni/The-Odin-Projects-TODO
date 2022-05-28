import AddProjectModal from "./Components/AddProjectModal";
import Header from "./Components/Header";
import Main from "./Components/Main";

import Controller from "./Controller";

class UI {
  static #root;
  static #modalRoot;
  static #activeMenuItem;
  static #isMenuOpen;
  static #openTab;

  static init(root, modalRoot) {
    UI.#root = root;
    UI.#modalRoot = modalRoot;
    UI.#isMenuOpen = true;
    UI.activeMenuItem = Controller.defaultProjects.projects[0].id;
    UI.#openTab = { type: "list", id: this.#activeMenuItem };

    UI.#modalRoot.addEventListener("click", (e) => {
      if (e.target == e.currentTarget) {
        UI.closeModal();
      }
    });

    UI.render();
  }

  static set activeMenuItem(item) {
    UI.#activeMenuItem = item;
  }

  static get activeMenuItem() {
    return UI.#activeMenuItem;
  }

  static get isMenuOpen() {
    return UI.#isMenuOpen;
  }

  static set openTab({ type = "create", id = null }) {
    UI.#openTab = { type, id };
    UI.render();
  }

  static get openTab() {
    return UI.#openTab;
  }

  static toggleMenu() {
    UI.#isMenuOpen = !UI.isMenuOpen;
    UI.render();
  }

  static render() {
    UI.#root.innerHTML = "";
    UI.renderMenu();
    UI.renderMain();
  }

  static renderMenu() {
    const header = Header();
    UI.#root.appendChild(header);
  }

  static openModal() {
    UI.#modalRoot.classList.add("open");
  }

  static closeModal() {
    UI.#modalRoot.innerHTML = "";
    UI.#modalRoot.classList.remove("open");
  }

  static openAddProjectModal() {
    const modal = AddProjectModal();

    UI.#modalRoot.appendChild(modal);
    UI.openModal();
  }

  static renderMain() {
    const main = Main();
    UI.#root.appendChild(main);
  }
}

export default UI;
