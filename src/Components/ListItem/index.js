import styles from "./styles.module.scss";

import { format } from "date-fns";

// Icons
import EditIcon from "../../Assets/clipboard-edit-outline.svg";
import DeleteIcon from "../../Assets/delete-outline.svg";
import CompleteIcon from "../../Assets/progress-check.svg";
import InCompleteIcon from "../../Assets/progress-close.svg";
import UI from "../../UI";
import Controller from "../../Controller";

const ListItem = (todo) => {
  const li = document.createElement("li");
  li.classList.add(styles.listItem);

  const head = document.createElement("head");
  head.classList.add(styles.head);

  const avatar = document.createElement("div");
  avatar.classList.add(styles.avatar);
  avatar.textContent = "Z";

  const content = document.createElement("div");
  content.classList.add(styles.content);

  const title = document.createElement("h3");
  title.classList.add(styles.title);
  if (todo.isComplete) {
    title.classList.add(styles.complete);
  }
  title.textContent = todo.title;

  const dueDate = document.createElement("span");
  dueDate.classList.add(styles.dueDate);
  dueDate.textContent = format(new Date(todo.dueDate), "do MMMM yyyy");

  content.appendChild(title);
  content.appendChild(dueDate);

  head.appendChild(avatar);
  head.appendChild(content);

  const body = document.createElement("div");
  body.classList.add(styles.body);

  const desc = document.createElement("p");
  desc.textContent = todo.description;

  body.appendChild(desc);

  const foot = document.createElement("div");
  foot.classList.add(styles.foot);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add(styles.btn, styles.delete);
  deleteBtn.innerHTML = DeleteIcon;
  deleteBtn.title = "Delete";
  deleteBtn.addEventListener("click", (e) => {
    const { id } = UI.openTab;
    const project = Controller.getProjectById(id);
    project.removeTodo(todo.id);
    UI.render();
  });

  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add(styles.btn);
  if (todo.isComplete) {
    toggleBtn.innerHTML = InCompleteIcon;
    toggleBtn.title = "Mark Incomplete";
  } else {
    toggleBtn.classList.add(styles.complete);
    toggleBtn.innerHTML = CompleteIcon;
    toggleBtn.title = "Mark Complete";
  }
  toggleBtn.addEventListener("click", (e) => {
    todo.toggleComplete();
    UI.render();
  });

  const editBtn = document.createElement("button");
  editBtn.classList.add(styles.btn, styles.edit);
  editBtn.innerHTML = EditIcon;
  editBtn.title = "Edit";
  editBtn.addEventListener("click", (e) => {
    UI.openTab = { type: "edit", id: todo.id };
  });

  foot.appendChild(deleteBtn);
  foot.appendChild(toggleBtn);
  foot.appendChild(editBtn);

  li.appendChild(head);
  li.appendChild(body);
  li.appendChild(foot);

  return li;
};

export default ListItem;
