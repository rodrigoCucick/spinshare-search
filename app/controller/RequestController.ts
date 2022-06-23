import { ApiStatusView } from "../view/ApiStatusView.js";
import { SearchResultsView } from "../view/SearchResultsView.js";
import { FormController } from "./FormController.js";
import { PagerController } from "./PagerController.js";

export class RequestController {
    // Search response.
    private _json: any = null;

    // URLs.
    private _baseURL: string = "https://spinsha.re/api/";
    private _pingURL: string = `${this._baseURL}ping`;
    private _searchChartsURL: string = `${this._baseURL}searchCharts`;

    // Views.
    private _apiStatusView: ApiStatusView = new ApiStatusView("#apiStatusView");
    private _searchResultsView: SearchResultsView = new SearchResultsView("#searchResultsView");

    // Controllers.
    private _formController: FormController = new FormController();
    private _pagerController: PagerController = new PagerController();

    constructor() {
        this.setEventListeners();
        this.ping();
    }

    private setEventListeners() {
        this._apiStatusView.element.addEventListener("click", () => {
            this.ping(); 
        });

        this._formController.searchForm.addEventListener("submit", event => {
            event.preventDefault();
            this.searchCharts();
        });

        this._pagerController.prevBtn.addEventListener("click", () => {
            this._pagerController.prevPage();
            this.displayResults();
        });

        this._pagerController.nextBtn.addEventListener("click", () => {
            this._pagerController.nextPage();
            this.displayResults();
        });
    }

    ping(): void {
        this._apiStatusView.update(null);
        fetch(this._pingURL)
            .then(response => response.json())
            .then(json => this._apiStatusView.update(json.pong));
    }

    searchCharts(): void {
        if (this._formController.isDiffRatingInvalid()) {
            // TODO - Rodrigo: Display validation error message.
            return;
        }

        fetch(this._searchChartsURL, {
            method: "POST",
            body: this._formController.jsonBody
        })
            .then(response => response.json())
            .then(json => {
                this._json = json;
                if (this._json.data.length > 0) {
                    this._pagerController.setCounterInitialState(this._json.data.length);
                    this.displayResults();
                } else {
                    this._searchResultsView.hide();
                    this._pagerController.hidePager();
                }
            });
    }

    displayResults(): void {
        this._pagerController.enableDisablePagerButtons();
        this._searchResultsView.pageNumber = this._pagerController.pageNumber;
        this._searchResultsView.update(this._json)  

        this._searchResultsView.show();
        this._pagerController.showPager();
    }
}