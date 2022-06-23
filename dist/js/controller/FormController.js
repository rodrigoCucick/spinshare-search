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
    get searchForm() {
        return this._searchForm;
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
    isDiffRatingInvalid() {
        return this._diffRatingFromInp.value > this._diffRatingToInp.value;
    }
    isDiffRatingValid() {
        return this._diffRatingFromInp.value <= this._diffRatingToInp.value;
    }
    hideSearchButton() {
        this._searchChartsBtn.classList.add("search-button-effect");
    }
    showSearchButton() {
        this._searchChartsBtn.classList.remove("search-button-effect");
    }
    showSpinner() {
        this._formSpinner.classList.remove("fade-out");
    }
    hideSpinner() {
        this._formSpinner.classList.add("fade-out");
    }
    setEventListeners() {
        this._searchChartsBtn.addEventListener("click", () => {
            this.hideSearchButton();
            this.showSpinner();
        });
    }
}
