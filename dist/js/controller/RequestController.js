import { ApiStatusView } from "../view/ApiStatusView.js";
import { SearchResultsView } from "../view/SearchResultsView.js";
import { FormController } from "./FormController.js";
import { PagerController } from "./PagerController.js";
export class RequestController {
    constructor() {
        // Search response.
        this._json = null;
        // URLs.
        this._baseURL = "https://spinsha.re/api/";
        this._pingURL = `${this._baseURL}ping`;
        this._searchChartsURL = `${this._baseURL}searchCharts`;
        // Views.
        this._apiStatusView = new ApiStatusView("#apiStatusView");
        this._searchResultsView = new SearchResultsView("#searchResultsView");
        // Controllers.
        this._formController = new FormController();
        this._pagerController = new PagerController();
        this.setEventListeners();
        this.ping();
    }
    setEventListeners() {
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
    ping() {
        this._apiStatusView.update(null);
        fetch(this._pingURL)
            .then(response => response.json())
            .then(json => this._apiStatusView.update(json.pong));
    }
    searchCharts() {
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
            }
            else {
                this._searchResultsView.hide();
                this._pagerController.hidePager();
            }
        });
    }
    displayResults() {
        this._pagerController.enableDisablePagerButtons();
        this._searchResultsView.pageNumber = this._pagerController.pageNumber;
        this._searchResultsView.update(this._json);
        this._searchResultsView.show();
        this._pagerController.showPager();
    }
}
