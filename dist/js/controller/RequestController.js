import { RequestService } from "../service/RequestService.js";
import { ApiStatusView } from "../view/ApiStatusView.js";
import { SearchResultsView } from "../view/SearchResultsView.js";
import { AlertsController } from "./AlertsController.js";
import { FormController } from "./FormController.js";
import { PagerController } from "./PagerController.js";
export class RequestController {
    constructor() {
        // Search response.
        this._searchChartsJson = null;
        // URLs.
        this._baseURL = "https://spinsha.re/api/";
        this._pingURL = `${this._baseURL}ping`;
        this._searchChartsURL = `${this._baseURL}searchCharts`;
        // Views.
        this._apiStatusView = new ApiStatusView("#apiStatusView");
        this._searchResultsView = new SearchResultsView("#searchResultsView");
        // Controllers.
        this._alertController = new AlertsController();
        this._formController = new FormController();
        this._pagerController = new PagerController();
        this.setEventListeners();
        this.ping(); // First ping is when an object of this class is instantiated.
    }
    searchCharts() {
        RequestService.searchCharts(this._searchChartsURL, this._formController.requestJsonBody)
            .then((searchChartsJson) => {
            this._searchChartsJson = searchChartsJson;
            this._formController.stopLoadingAnimation();
            if (this._searchChartsJson.data.length > 0) {
                this._pagerController.setCounterInitialState(this._searchChartsJson.data.length);
                this.displayResults();
            }
            else {
                // TODO - Rodrigo: Display info dialog about no results found.
                this.hidePagerAndTable();
            }
        });
    }
    ping() {
        this._apiStatusView.update(null);
        RequestService.ping(this._pingURL)
            .then((pingJson) => this._apiStatusView.update(pingJson.pong));
    }
    setEventListeners() {
        // API status div.
        this._apiStatusView.element.addEventListener("click", () => {
            this.ping();
        });
        // Pager Previous button.
        this._pagerController.prevBtn.addEventListener("click", () => {
            this._pagerController.prevPage();
            this.displayResults();
        });
        // Pager Next button.
        this._pagerController.nextBtn.addEventListener("click", () => {
            this._pagerController.nextPage();
            this.displayResults();
        });
        // Form Search button.
        this._formController.searchChartsBtn.addEventListener("click", () => {
            if (this._formController.isDiffRatingInvalid) {
                this._alertController.showAlert("Difficulty rating <b>FROM</b> cannot be greater than difficulty rating <b>TO</b>!", this._formController.diffRatingFromInp);
                return;
            }
            this._formController.startLoadingAnimation();
            this.searchCharts();
        });
    }
    displayResults() {
        this._pagerController.enableDisablePagerButtons();
        this._searchResultsView.pageNumber = this._pagerController.pageNumber;
        this._searchResultsView.update(this._searchChartsJson);
        this.showPagerAndTable();
    }
    showPagerAndTable() {
        this._searchResultsView.show();
        this._pagerController.showPager();
    }
    hidePagerAndTable() {
        this._searchResultsView.hide();
        this._pagerController.hidePager();
    }
}
