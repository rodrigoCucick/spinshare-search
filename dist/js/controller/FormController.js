var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domElement } from "../decorator/DomElement.js";
import { FormStringUtils } from "../utils/FormStringUtils.js";
export class FormController {
    constructor() {
        this.setEventListeners();
    }
    get diffRatingFromInp() {
        return this._diffRatingFromInp;
    }
    get isDiffRatingInvalid() {
        return Number.parseInt(this._diffRatingFromInp.value) > Number.parseInt(this._diffRatingToInp.value);
    }
    get requestJsonBody() {
        return JSON.stringify({
            searchQuery: this._searchQueryInp.value,
            diffEasy: this._diffEasyChk.checked,
            diffNormal: this._diffNormalChk.checked,
            diffHard: this._diffHardChk.checked,
            diffExpert: this._diffExpertChk.checked,
            diffXD: this._diffXDChk.checked,
            diffRatingFrom: this._diffRatingFromInp.value,
            diffRatingTo: this._diffRatingToInp.value,
            showExplicit: this._showExplicitChk.checked
        });
    }
    get searchChartsBtn() {
        return this._searchChartsBtn;
    }
    startLoadingAnimation() {
        this.hideSearchButton();
        this.showSpinner();
    }
    stopLoadingAnimation() {
        this.hideSpinner();
        this.showSearchButton();
    }
    setEventListeners() {
        this._searchQueryInp.addEventListener("blur", () => {
            this._searchQueryInp.value =
                FormStringUtils.removeSpecialCharacters(this._searchQueryInp.value);
        });
        this._diffRatingFromInp.addEventListener("blur", () => {
            this._diffRatingFromInp.value =
                FormStringUtils.onlyNumbers(FormStringUtils.nullToZero(this._diffRatingFromInp.value));
        });
        this._diffRatingToInp.addEventListener("blur", () => {
            this._diffRatingToInp.value =
                FormStringUtils.onlyNumbers(FormStringUtils.nullToZero(this._diffRatingToInp.value));
        });
        this._searchForm.addEventListener("submit", event => {
            event.preventDefault();
        });
    }
    showSearchButton() {
        this._searchChartsBtn.classList.remove("search-button-effect");
    }
    hideSearchButton() {
        this._searchChartsBtn.classList.add("search-button-effect");
    }
    showSpinner() {
        this._formSpinner.classList.remove("fade-out");
    }
    hideSpinner() {
        this._formSpinner.classList.add("fade-out");
    }
}
__decorate([
    domElement("#searchForm")
], FormController.prototype, "_searchForm", void 0);
__decorate([
    domElement("#searchQuery")
], FormController.prototype, "_searchQueryInp", void 0);
__decorate([
    domElement("#diffEasy")
], FormController.prototype, "_diffEasyChk", void 0);
__decorate([
    domElement("#diffNormal")
], FormController.prototype, "_diffNormalChk", void 0);
__decorate([
    domElement("#diffHard")
], FormController.prototype, "_diffHardChk", void 0);
__decorate([
    domElement("#diffExpert")
], FormController.prototype, "_diffExpertChk", void 0);
__decorate([
    domElement("#diffXD")
], FormController.prototype, "_diffXDChk", void 0);
__decorate([
    domElement("#diffRatingFrom")
], FormController.prototype, "_diffRatingFromInp", void 0);
__decorate([
    domElement("#diffRatingTo")
], FormController.prototype, "_diffRatingToInp", void 0);
__decorate([
    domElement("#showExplicit")
], FormController.prototype, "_showExplicitChk", void 0);
__decorate([
    domElement("#searchCharts")
], FormController.prototype, "_searchChartsBtn", void 0);
__decorate([
    domElement("#formSpinner")
], FormController.prototype, "_formSpinner", void 0);
