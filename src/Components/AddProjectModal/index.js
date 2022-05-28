import Controller from "../../Controller";
import UI from "../../UI";
import styles from "./styles.module.scss";

const AddProjectModal = () => {
  const container = document.createElement("div");
  container.classList.add(styles.addProject);

  const title = document.createElement("h2");
  title.classList.add(styles.title);
  title.textContent = "Add Project";

  const formControl = document.createElement("label");
  formControl.classList.add(styles.formControl);

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Project Title";
  input.required = true;
  input.addEventListener("keydown", (e) => {
    error.textContent = "";
  });

  const label = document.createElement("span");
  label.classList.add(styles.label);
  label.textContent = "Project Title";

  const error = document.createElement("span");
  error.classList.add(styles.error);

  formControl.appendChild(input);
  formControl.appendChild(label);
  formControl.appendChild(error);

  const addButton = document.createElement("button");
  addButton.classList.add(styles.btn);
  addButton.textContent = "Add Project";
  addButton.addEventListener("click", (e) => {
    const value = input.value.trim();
    error.textContent = "";
    if (value === "") {
      return;
    }

    if (value.length > 30) {
      error.textContent = "Title length should be between 1 & 30";
      return;
    }

    if (!Controller.isProjectTitleAvailable(value)) {
      error.textContent = "Project with Title Already Exist";
      return;
    }

    Controller.addUserProject(value);
    UI.closeModal();
  });

  container.appendChild(title);
  container.appendChild(formControl);
  container.appendChild(addButton);

  return container;
};

export default AddProjectModal;
