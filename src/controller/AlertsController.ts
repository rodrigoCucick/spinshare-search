import { domElement } from "../decorator/DomElement.js";
import { AlertMessageView } from "../view/AlertMessageView.js";

export class AlertsController {
    @domElement("#blackBox")
    private static _blackBox: HTMLElement;

    @domElement("#alertsContainer")
    private static _alertsContainer: HTMLElement;

    @domElement("#btnAlert")
    private static _alertBtn: HTMLButtonElement;

    private static _alertMessageView: AlertMessageView = new AlertMessageView("#alertMessageView");

    private static _largePaddingClass = "alerts-padding-top-35";
    private static _smallPaddingClass = "alerts-padding-top-12";

    public static showAlert(alertMessage: string, element: HTMLElement = null): void {
        this.showBlackBox();
        this.showAlertsContainer();
        this._alertMessageView.update(alertMessage);
        this.setAlertBtnEventListeners(element);   
    }

    public static setLargePadding() {
        this._alertsContainer.classList.remove(this._smallPaddingClass);
        this._alertsContainer.classList.add(this._largePaddingClass);
    }

    public static setSmallPadding() {
        this._alertsContainer.classList.remove(this._largePaddingClass);
        this._alertsContainer.classList.add(this._smallPaddingClass);
    }

    private static setAlertBtnEventListeners(element: HTMLElement): void {
        this._alertBtn.addEventListener("click", () => {
            this.hideAlert();
            if (element !== null) {
                element.focus();
            }
            this.setLargePadding();
        })
    }

    private static hideAlert(): void {
        this.hideAlertsContainer();
        this.hideBlackBox();
    }

    private static showAlertsContainer(): void {
        this._alertsContainer.classList.remove("hidden");
    }

    private static hideAlertsContainer(): void {
        this._alertsContainer.classList.add("hidden");
    }

    private static showBlackBox(): void {
        this._blackBox.classList.remove("hidden");
    }

    private static hideBlackBox(): void {
        this._blackBox.classList.add("hidden");
    }
}