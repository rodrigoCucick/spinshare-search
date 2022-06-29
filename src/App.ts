import { AlertsController } from "./controller/AlertsController.js";
import { FooterIconsController } from "./controller/FooterIconsController.js";
import { RequestController } from "./controller/RequestController.js";

const alertsController = new AlertsController();
const requestController = new RequestController(alertsController);
const footerIconsController = new FooterIconsController(alertsController);