var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domElement } from "../decorator/DomElement.js";
import { AlertMessageView } from "../view/AlertMessageView.js";
export class AlertsController {
    constructor() {
        this._alertMessageView = new AlertMessageView("#alertMessageView");
        this._largePaddingClass = "alerts-padding-top-35";
        this._smallPaddingClass = "alerts-padding-top-12";
        this._alertBtn.addEventListener("click", () => {
            this.hideAlert();
            this.setLargePadding();
        });
    }
    showAlert(alertMessage) {
        this.showBlackBox();
        this.showAlertsContainer();
        this._alertMessageView.update(alertMessage);
    }
    setLargePadding() {
        this._alertsContainer.classList.remove(this._smallPaddingClass);
        this._alertsContainer.classList.add(this._largePaddingClass);
    }
    setSmallPadding() {
        this._alertsContainer.classList.remove(this._largePaddingClass);
        this._alertsContainer.classList.add(this._smallPaddingClass);
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
__decorate([
    domElement("#blackBox")
], AlertsController.prototype, "_blackBox", void 0);
__decorate([
    domElement("#alertsContainer")
], AlertsController.prototype, "_alertsContainer", void 0);
__decorate([
    domElement("#btnAlert")
], AlertsController.prototype, "_alertBtn", void 0);
