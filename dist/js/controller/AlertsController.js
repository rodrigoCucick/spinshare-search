var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domElement } from "../decorator/DomElement.js";
import { AlertMessageView } from "../view/AlertMessageView.js";
export class AlertsController {
    static showAlert(alertMessage, element = null) {
        this.showBlackBox();
        this.showAlertsContainer();
        this._alertMessageView.update(alertMessage);
        this.setAlertBtnEventListeners(element);
    }
    static setLargePadding() {
        this._alertsContainer.classList.remove(this._smallPaddingClass);
        this._alertsContainer.classList.add(this._largePaddingClass);
    }
    static setSmallPadding() {
        this._alertsContainer.classList.remove(this._largePaddingClass);
        this._alertsContainer.classList.add(this._smallPaddingClass);
    }
    static setAlertBtnEventListeners(element) {
        this._alertBtn.addEventListener("click", () => {
            this.hideAlert();
            if (element !== null) {
                element.focus();
            }
            this.setLargePadding();
        });
    }
    static hideAlert() {
        this.hideAlertsContainer();
        this.hideBlackBox();
    }
    static showAlertsContainer() {
        this._alertsContainer.classList.remove("hidden");
    }
    static hideAlertsContainer() {
        this._alertsContainer.classList.add("hidden");
    }
    static showBlackBox() {
        this._blackBox.classList.remove("hidden");
    }
    static hideBlackBox() {
        this._blackBox.classList.add("hidden");
    }
}
AlertsController._alertMessageView = new AlertMessageView("#alertMessageView");
AlertsController._largePaddingClass = "alerts-padding-top-35";
AlertsController._smallPaddingClass = "alerts-padding-top-12";
__decorate([
    domElement("#blackBox")
], AlertsController, "_blackBox", void 0);
__decorate([
    domElement("#alertsContainer")
], AlertsController, "_alertsContainer", void 0);
__decorate([
    domElement("#btnAlert")
], AlertsController, "_alertBtn", void 0);
