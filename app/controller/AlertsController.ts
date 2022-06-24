import { AlertMessageView } from "../view/AlertMessageView.js";

export class AlertsController {
    private _blackBox: HTMLElement = document.querySelector("#blackBox");
    private _alertsContainer: HTMLElement = document.querySelector("#alertsContainer");
    private _alertBtn: HTMLButtonElement = document.querySelector("#btnAlert");
    private _alertMessageView: AlertMessageView = new AlertMessageView("#alertMessageView");

    public showAlert(alertMessage: string, element: HTMLElement = null): void {
        this.showBlackBox();
        this.showAlertsContainer();
        this._alertMessageView.update(alertMessage);
        this.setAlertBtnEventListeners(element);   
    }

    private setAlertBtnEventListeners(element: HTMLElement): void {
        this._alertBtn.addEventListener("click", () => {
            this.hideAlert();
            if (element !== null) {
                element.focus();
            }
        })
    }

    private hideAlert(): void {
        this.hideAlertsContainer();
        this.hideBlackBox();
    }

    private showAlertsContainer(): void {
        this._alertsContainer.classList.remove("hidden");
    }

    private hideAlertsContainer(): void {
        this._alertsContainer.classList.add("hidden");
    }

    private showBlackBox(): void {
        this._blackBox.classList.remove("hidden");
    }

    private hideBlackBox(): void {
        this._blackBox.classList.add("hidden");
    }
}