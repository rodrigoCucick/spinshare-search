import { RequestService } from "../service/RequestService.js";
import { PingBody } from "../type/PingBody.js";
import { SearchChartsBody } from "../type/SearchChartsBody.js";
import { ApiStatusView } from "../view/ApiStatusView.js";
import { SearchResultsView } from "../view/SearchResultsView.js";
import { AlertsController } from "./AlertsController.js";
import { FormController } from "./FormController.js";
import { PagerController } from "./PagerController.js";

export class RequestController {
    // Search response.
    private _searchChartsJson: SearchChartsBody = null;

    // URLs.
    private _baseURL: string = "https://spinsha.re/api/";
    private _pingURL: string = `${this._baseURL}ping`;
    private _searchChartsURL: string = `${this._baseURL}searchCharts`;

    // Views.
    private _apiStatusView: ApiStatusView = new ApiStatusView("#apiStatusView");
    private _searchResultsView: SearchResultsView = new SearchResultsView("#searchResultsView");

    // Controllers.
    private _alertController: AlertsController = new AlertsController();
    private _formController: FormController = new FormController();
    private _pagerController: PagerController = new PagerController();

    constructor() {
        this.setEventListeners();
        this.ping(); // First ping is when an object of this class is instantiated.
    }

    public searchCharts(): void {
        RequestService.searchCharts(this._searchChartsURL, this._formController.requestJsonBody)
        .then((searchChartsJson: SearchChartsBody) => {
            this._searchChartsJson = searchChartsJson;
            this._formController.stopLoadingAnimation();
            if (this._searchChartsJson.data.length > 0) {
                this._pagerController.setCounterInitialState(this._searchChartsJson.data.length);
                this.displayResults();
            } else {
                // TODO - Rodrigo: Display info dialog about no results found.
                this.hidePagerAndTable();
            }
        });
    }

    public ping(): void {
        this._apiStatusView.update(null);

        RequestService.ping(this._pingURL)
        .then((pingJson: PingBody) => this._apiStatusView.update(pingJson.pong));
    }

    private setEventListeners() {
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
                this._alertController.showAlert(
                    "Difficulty rating <b>FROM</b> cannot be greater than difficulty rating <b>TO</b>!",
                    this._formController.diffRatingFromInp
                );
                return;
            }
            this._formController.startLoadingAnimation();
            this.searchCharts();
        })
    }

    private displayResults(): void {
        this._pagerController.enableDisablePagerButtons();
        this._searchResultsView.pageNumber = this._pagerController.pageNumber;
        this._searchResultsView.update(this._searchChartsJson)
        this.showPagerAndTable();
    }

    private showPagerAndTable(): void {
        this._searchResultsView.show();
        this._pagerController.showPager();
    }

    private hidePagerAndTable(): void {
        this._searchResultsView.hide();
        this._pagerController.hidePager();
    }
}