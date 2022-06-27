import { AlertMessageView } from "../view/AlertMessageView.js";
export class AlertsController {
    constructor() {
        this._blackBox = document.querySelector("#blackBox");
        this._alertsContainer = document.querySelector("#alertsContainer");
        this._alertBtn = document.querySelector("#btnAlert");
        this._alertMessageView = new AlertMessageView("#alertMessageView");
    }
    showAlert(alertMessage, element = null) {
        this.showBlackBox();
        this.showAlertsContainer();
        this._alertMessageView.update(alertMessage);
        this.setAlertBtnEventListeners(element);
    }
    setAlertBtnEventListeners(element) {
        this._alertBtn.addEventListener("click", () => {
            this.hideAlert();
            if (element !== null) {
                element.focus();
            }
        });
    }
    hideAlert() {
        this.hideAlertsContainer();
        this.hideBlackBox();
    }
    showAlertsContainer() {
        this._alertsContainer.classList.remove("hidden");
    }
    hideAlertsContainer() {
        this._alertsContainer.classList.add("hidden");
    }
    showBlackBox() {
        this._blackBox.classList.remove("hidden");
    }
    hideBlackBox() {
        this._blackBox.classList.add("hidden");
    }
}
