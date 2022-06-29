import { AlertMessages } from "../enum/AlertMessages.js";
import { FooterIconsView } from "../view/FooterIconsView.js";
export class FooterIconsController {
    constructor(alertsController) {
        this._footerIconsView = new FooterIconsView("#footerIconsView");
        this._footerIconsView.update("");
        this._ghRepoIcon = document.querySelector("#ghRepoIcon");
        this._helpIcon = document.querySelector("#helpIcon");
        this._alertsController = alertsController;
        this._helpIcon.addEventListener("click", () => {
            this._alertsController.setSmallPadding();
            this._alertsController.showAlert(AlertMessages.ALERT_INSTALLATION_HELP);
        });
    }
}
