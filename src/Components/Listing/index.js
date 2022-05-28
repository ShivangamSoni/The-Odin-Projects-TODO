import styles from "./styles.module.scss";

import Controller from "../../Controller";
import UI from "../../UI";
import ListItem from "../ListItem";

const Listing = () => {
  const container = document.createElement("div");
  container.classList.add(styles.listing);

  const id = UI.openTab.id;
  const project = Controller.getProjectById(id);
  project.todoList.forEach((todo) => {
    const li = ListItem(todo);
    container.appendChild(li);
  });

  return container;
};

export default Listing;
