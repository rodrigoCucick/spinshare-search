export class FormController {
    private _searchForm: HTMLFormElement = document.querySelector("#searchForm");
    private _searchQueryInp: HTMLInputElement = document.querySelector("#searchQuery");
    private _diffEasyChk: HTMLInputElement = document.querySelector("#diffEasy");
    private _diffNormalChk: HTMLInputElement = document.querySelector("#diffNormal");
    private _diffHardChk: HTMLInputElement = document.querySelector("#diffHard");
    private _diffExpertChk: HTMLInputElement = document.querySelector("#diffExpert");
    private _diffXDChk: HTMLInputElement = document.querySelector("#diffXD");
    private _diffRatingFromInp: HTMLInputElement = document.querySelector("#diffRatingFrom");
    private _diffRatingToInp: HTMLInputElement = document.querySelector("#diffRatingTo");
    private _showExplicitChk: HTMLInputElement = document.querySelector("#showExplicit");
    private _searchChartsBtn: HTMLButtonElement = document.querySelector("#searchCharts");
    private _formSpinner: HTMLElement = document.querySelector("#formSpinner");

    constructor() {
        this.setEventListeners();
    }

    get diffRatingFromInp(): HTMLInputElement {
        return this._diffRatingFromInp;
    }

    get isDiffRatingInvalid(): boolean {
        return Number.parseInt(this._diffRatingFromInp.value) > Number.parseInt(this._diffRatingToInp.value);
    }

    get jsonBody(): string {
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