import styles from "./styles.module.scss";

import addIcon from "../../Assets/plus-circle-outline.svg";
import deleteIcon from "../../Assets/delete-outline.svg";

import UI from "../../UI";
import Controller from "../../Controller";

const Nav = (projects, navTitle) => {
  const container = document.createElement("nav");
  container.classList.add(styles.nav);

  if (navTitle) {
    const head = document.createElement("div");
    head.classList.add(styles.head);

    const title = document.createElement("h2");
    title.classList.add(styles.title);
    title.textContent = navTitle;

    const addButton = document.createElement("button");
    addButton.classList.add(styles.btn);
    addButton.innerHTML = addIcon;
    addButton.title = "Add Project";

    addButton.addEventListener("click", UI.openAddProjectModal);

    head.appendChild(title);
    head.appendChild(addButton);

    container.appendChild(head);
  }

  projects.projects.forEach((item) => {
    const id = item.id;
    const title = item.title;

    const link = document.createElement("a");
    link.classList.add(styles.link);

    if (id === UI.activeMenuItem) {
      link.classList.add(styles.active);
    }

    const text = document.createElement("span");
    text.classList.add(styles.linkText);
    text.textContent = title;

    link.appendChild(text);

    link.addEventListener("click", (e) => {
      e.preventDefault();
      UI.activeMenuItem = id;
      UI.openTab = { type: "list", id };
    });

    if (navTitle) {
      const deleteButton = document.createElement("button");
      deleteButton.classList.add(styles.deleteBtn);
      deleteButton.innerHTML = deleteIcon;

      deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        Controller.deleteUserProject(id);
      });

      link.appendChild(deleteButton);
    }

    container.appendChild(link);
  });

  return container;
};

export default Nav;
