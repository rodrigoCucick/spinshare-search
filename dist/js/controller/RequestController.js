import { AlertMessages } from "../enum/AlertMessages.js";
import { RequestService } from "../service/RequestService.js";
import { ApiStatusView } from "../view/ApiStatusView.js";
import { SearchResultsView } from "../view/SearchResultsView.js";
import { FormController } from "./FormController.js";
import { PagerController } from "./PagerController.js";
export class RequestController {
    constructor(alertsController) {
        this._searchChartsJson = null;
        this._baseURL = "https://spinsha.re/api/";
        this._pingURL = `${this._baseURL}ping`;
        this._searchChartsURL = `${this._baseURL}searchCharts`;
        this._formController = new FormController();
        this._pagerController = new PagerController();
        this._apiStatusView = new ApiStatusView("#apiStatusView");
        this._searchResultsView = new SearchResultsView("#searchResultsView");
        this._alertsController = alertsController;
        this.setEventListeners();
        this.ping();
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
                this._alertsController.showAlert(AlertMessages.ALERT_NO_DATA_FOUND);
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
        this._apiStatusView.element.addEventListener("click", () => {
            this.ping();
        });
        this._pagerController.prevBtn.addEventListener("click", () => {
            this._pagerController.prevPage();
            this.displayResults();
        });
        this._pagerController.nextBtn.addEventListener("click", () => {
            this._pagerController.nextPage();
            this.displayResults();
        });
        this._formController.searchChartsBtn.addEventListener("click", () => {
            if (this._formController.isDiffRatingInvalid) {
                this._alertsController.showAlert(AlertMessages.ALERT_DIFF_RATING_INVALID);
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
