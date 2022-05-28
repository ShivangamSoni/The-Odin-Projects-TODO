import "./globalStyles.scss";

import Controller from "./Controller";

const root = document.getElementById("app");
const modalRoot = document.getElementById("modal");
Controller.init(root, modalRoot);
