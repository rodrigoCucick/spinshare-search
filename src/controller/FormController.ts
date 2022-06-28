import { domElement } from "../decorator/DomElement.js";
import { FormStringUtils } from "../utils/FormStringUtils.js";

export class FormController {
    @domElement("#searchForm")
    private _searchForm: HTMLFormElement;

    @domElement("#searchQuery")
    private _searchQueryInp: HTMLInputElement;

    @domElement("#diffEasy")
    private _diffEasyChk: HTMLInputElement;

    @domElement("#diffNormal")
    private _diffNormalChk: HTMLInputElement;

    @domElement("#diffHard")
    private _diffHardChk: HTMLInputElement;

    @domElement("#diffExpert")
    private _diffExpertChk: HTMLInputElement;

    @domElement("#diffXD")
    private _diffXDChk: HTMLInputElement;

    @domElement("#diffRatingFrom")
    private _diffRatingFromInp: HTMLInputElement;

    @domElement("#diffRatingTo")
    private _diffRatingToInp: HTMLInputElement;

    @domElement("#showExplicit")
    private _showExplicitChk: HTMLInputElement;

    @domElement("#searchCharts")
    private _searchChartsBtn: HTMLButtonElement;

    @domElement("#formSpinner")
    private _formSpinner: HTMLElement;

    constructor() {
        this.setEventListeners();
    }

    get diffRatingFromInp(): HTMLInputElement {
        return this._diffRatingFromInp;
    }

    get isDiffRatingInvalid(): boolean {
        return Number.parseInt(this._diffRatingFromInp.value) > Number.parseInt(this._diffRatingToInp.value);
    }

    get requestJsonBody(): string {
        return JSON.stringify({
            searchQuery:    this._searchQueryInp.value,
            diffEasy:       this._diffEasyChk.checked,
            diffNormal:     this._diffNormalChk.checked,
            diffHard:       this._diffHardChk.checked,
            diffExpert:     this._diffExpertChk.checked,
            diffXD:         this._diffXDChk.checked,
            diffRatingFrom: this._diffRatingFromInp.value,
            diffRatingTo:   this._diffRatingToInp.value,
            showExplicit:   this._showExplicitChk.checked
        });
    }

    get searchChartsBtn(): HTMLButtonElement {
        return this._searchChartsBtn;
    }

    public startLoadingAnimation(): void {
        this.hideSearchButton();
        this.showSpinner();
    }

    public stopLoadingAnimation(): void {
        this.hideSpinner();
        this.showSearchButton();
    }

    private setEventListeners(): void {
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

    private showSearchButton(): void {
        this._searchChartsBtn.classList.remove("search-button-effect");
    }

    private hideSearchButton(): void {
        this._searchChartsBtn.classList.add("search-button-effect");
    }

    private showSpinner(): void {
        this._formSpinner.classList.remove("fade-out");
    }

    private hideSpinner(): void {
        this._formSpinner.classList.add("fade-out");
    }
}