export class FormController {
    constructor() {
        this._searchForm = document.querySelector("#searchForm");
        this._searchQueryInp = document.querySelector("#searchQuery");
        this._diffEasyChk = document.querySelector("#diffEasy");
        this._diffNormalChk = document.querySelector("#diffNormal");
        this._diffHardChk = document.querySelector("#diffHard");
        this._diffExpertChk = document.querySelector("#diffExpert");
        this._diffXDChk = document.querySelector("#diffXD");
        this._diffRatingFromInp = document.querySelector("#diffRatingFrom");
        this._diffRatingToInp = document.querySelector("#diffRatingTo");
        this._showExplicitChk = document.querySelector("#showExplicit");
        this._searchChartsBtn = document.querySelector("#searchCharts");
        this._formSpinner = document.querySelector("#formSpinner");
        this.setEventListeners();
    }
    get diffRatingFromInp() {
        return this._diffRatingFromInp;
    }
    get isDiffRatingInvalid() {
        return Number.parseInt(this._diffRatingFromInp.value) > Number.parseInt(this._diffRatingToInp.value);
    }
    get jsonBody() {
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
