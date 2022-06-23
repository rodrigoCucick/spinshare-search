export class FormController {
    private _searchForm:        HTMLFormElement   = document.querySelector("#searchForm");
    private _searchQueryInp:    HTMLInputElement  = document.querySelector("#searchQuery");
    private _diffEasyChk:       HTMLInputElement  = document.querySelector("#diffEasy");
    private _diffNormalChk:     HTMLInputElement  = document.querySelector("#diffNormal");
    private _diffHardChk:       HTMLInputElement  = document.querySelector("#diffHard");
    private _diffExpertChk:     HTMLInputElement  = document.querySelector("#diffExpert");
    private _diffXDChk:         HTMLInputElement  = document.querySelector("#diffXD");
    private _diffRatingFromInp: HTMLInputElement  = document.querySelector("#diffRatingFrom");
    private _diffRatingToInp:   HTMLInputElement  = document.querySelector("#diffRatingTo");
    private _showExplicitChk:   HTMLInputElement  = document.querySelector("#showExplicit");
    private _searchChartsBtn:   HTMLButtonElement = document.querySelector("#searchCharts");

    get searchForm(): HTMLFormElement {
        return this._searchForm;
    }

    // TODO - Rodrigo: Implement a search cache system.
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

    isDiffRatingInvalid(): boolean {
        return this._diffRatingFromInp.value > this._diffRatingToInp.value;
    }

    isDiffRatingValid(): boolean {
        return this._diffRatingFromInp.value <= this._diffRatingToInp.value;
    }
}