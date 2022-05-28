import styles from "./styles.module.scss";

import UI from "../../UI";
import Listing from "../Listing";
import Controller from "../../Controller";

import AddIcon from "../../Assets/plus-circle-outline.svg";

const Main = () => {
  const container = document.createElement("main");
  container.classList.add(styles.main);

  const header = document.createElement("div");
  header.classList.add(styles.header);

  const title = document.createElement("h2");
  title.classList.add(styles.title);

  header.appendChild(title);

  let section = document.createElement("div");
  const type = UI.openTab?.type;

  if (type === "list") {
    const id = UI.openTab.id;
    const project = Controller.getProjectById(id);
    title.textContent = project.title;

    const addNewBtn = document.createElement("button");
    addNewBtn.classList.add(styles.btn);
    addNewBtn.innerHTML = AddIcon;
    addNewBtn.title = "Add Todo";
    addNewBtn.addEventListener("click", (e) => {
      UI.openTab = {};
    });

    header.appendChild(addNewBtn);

    section = Listing();
  } else if (type === "create") {
    title.textContent = "Create Todo";
  } else if (type === "edit") {
    title.textContent = "Edit Todo";
  }

  container.appendChild(header);
  container.appendChild(section);
  return container;
};

export default Main;
