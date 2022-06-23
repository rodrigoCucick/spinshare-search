export class PagerController {
    constructor() {
        this._pagerContainer = document.querySelector("#pagerContainer");
        this._prevBtn = document.querySelector("#btnPrevious");
        this._nextBtn = document.querySelector("#btnNext");
        this._counter = document.querySelector("#pageCounter");
    }
    get prevBtn() {
        return this._prevBtn;
    }
    get nextBtn() {
        return this._nextBtn;
    }
    get counter() {
        return this._counter;
    }
    get pageNumber() {
        return this._pageNumber;
    }
    get pageTotal() {
        return this._totalPages;
    }
    get totalCharts() {
        return this._totalCharts;
    }
    showPager() {
        this._pagerContainer.classList.remove("hidden");
    }
    hidePager() {
        this._pagerContainer.classList.add("hidden");
    }
    updateCounter() {
        this._counter.innerHTML = `Page ${this._pageNumber}/${this._totalPages} — ${this._totalCharts} Charts`;
    }
    calculateTotalPages() {
        this._totalPages = Math.ceil(this._totalCharts / 50);
    }
    setCounterInitialState(total) {
        this._pageNumber = 1;
        this._totalCharts = total;
        this.calculateTotalPages();
        this.updateCounter();
    }
    enableDisablePagerButtons() {
        this.enableDisableButton(this._prevBtn, this.pageNumber == 1);
        this.enableDisableButton(this._nextBtn, this.pageNumber == this.pageTotal);
    }
    prevPage() {
        this._pageNumber--;
        this.updateCounter();
    }
    nextPage() {
        this._pageNumber++;
        this.updateCounter();
    }
    enableDisableButton(btn, condition) {
        if (condition) {
            btn.disabled = true;
            btn.classList.add("disabled-btn");
        }
        else {
            btn.disabled = false;
            btn.classList.remove("disabled-btn");
        }
    }
}
