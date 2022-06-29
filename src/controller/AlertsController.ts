import { domElement } from "../decorator/DomElement.js";
import { AlertMessageView } from "../view/AlertMessageView.js";

export class AlertsController {
    @domElement("#blackBox")
    private _blackBox: HTMLElement;

    @domElement("#alertsContainer")
    private _alertsContainer: HTMLElement;

    @domElement("#btnAlert")
    private _alertBtn: HTMLButtonElement;

    private _alertMessageView: AlertMessageView = new AlertMessageView("#alertMessageView");

    private _largePaddingClass = "alerts-padding-top-35";
    private _smallPaddingClass = "alerts-padding-top-12";

    constructor() {
        this._alertBtn.addEventListener("click", () => {
            this.hideAlert();
            this.setLargePadding();
        });
    }

    public showAlert(alertMessage: string): void {
        this.showBlackBox();
        this.showAlertsContainer();
        this._alertMessageView.update(alertMessage);  
    }

    public setLargePadding(): void {
        this._alertsContainer.classList.remove(this._smallPaddingClass);
        this._alertsContainer.classList.add(this._largePaddingClass);
    }

    public setSmallPadding(): void {
        this._alertsContainer.classList.remove(this._largePaddingClass);
        this._alertsContainer.classList.add(this._smallPaddingClass);
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