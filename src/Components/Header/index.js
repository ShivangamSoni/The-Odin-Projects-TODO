import Nav from "../Nav";
import styles from "./styles.module.scss";

import UI from "../../UI";
import Controller from "../../Controller";

const Header = () => {
  const container = document.createElement("header");
  container.classList.add(styles.header);

  const logo = document.createElement("div");
  logo.classList.add(styles.logo);

  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add(styles.toggle);
  toggleBtn.addEventListener("click", UI.toggleMenu);

  for (let i = 0; i < 3; i++) {
    toggleBtn.append(document.createElement("span"));
  }

  logo.appendChild(toggleBtn);

  container.appendChild(logo);

  if (UI.isMenuOpen) {
    const brandName = document.createElement("h1");
    brandName.classList.add(styles.brand);
    brandName.textContent = "TODO APP";

    logo.appendChild(brandName);

    const defaultNav = Nav(Controller.defaultProjects);
    const userNav = Nav(Controller.userProjects, "Projects");
    container.appendChild(defaultNav);
    container.appendChild(userNav);
  }

  return container;
};

export default Header;
