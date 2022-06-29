import { AlertMessages } from "../enum/AlertMessages.js";
import { FooterIconsView } from "../view/FooterIconsView.js";
import { AlertsController } from "./AlertsController.js";

export class FooterIconsController {
    private _footerIconsView = new FooterIconsView("#footerIconsView");
    private _ghRepoIcon: HTMLElement;
    private _helpIcon: HTMLElement;

    private _alertsController: AlertsController;

    constructor(alertsController: AlertsController) {
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