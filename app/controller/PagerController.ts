export class PagerController {
    private _pagerContainer: HTMLElement;
    private _prevBtn: HTMLButtonElement;
    private _nextBtn: HTMLButtonElement;
    private _counter: HTMLElement;

    private _pageNumber:  number;
    private _totalPages:  number;
    private _totalCharts: number;

    constructor() {
        this._pagerContainer = document.querySelector("#pagerContainer");
        this._prevBtn = document.querySelector("#btnPrevious");
        this._nextBtn = document.querySelector("#btnNext");
        this._counter = document.querySelector("#pageCounter");
    }

    get prevBtn(): HTMLButtonElement {
        return this._prevBtn;
    }

    get nextBtn(): HTMLButtonElement {
        return this._nextBtn;
    }

    get counter(): HTMLElement {
        return this._counter;
    }

    get pageNumber(): number {
        return this._pageNumber;
    }

    get pageTotal(): number {
        return this._totalPages;
    }

    get totalCharts(): number {
        return this._totalCharts;
    }

    showPager(): void {
        this._pagerContainer.classList.remove("hidden");
    }

    hidePager(): void {
        this._pagerContainer.classList.add("hidden");
    }

    updateCounter(): void {
        this._counter.innerHTML = `Page ${this._pageNumber}/${this._totalPages} — ${this._totalCharts} Charts`;
    }

    calculateTotalPages(): void {
        this._totalPages = Math.ceil(this._totalCharts / 50);
    }

    setCounterInitialState(total: number): void {
        this._pageNumber = 1;
        this._totalCharts = total;
        this.calculateTotalPages();
        this.updateCounter();
    }

    enableDisablePagerButtons(): void {
        this.enableDisableButton(this._prevBtn, this.pageNumber == 1);
        this.enableDisableButton(this._nextBtn, this.pageNumber == this.pageTotal);
    }

    private enableDisableButton(btn: HTMLButtonElement, condition: boolean): void {
        if (condition) {
            btn.disabled = true;
            btn.classList.add("disabled-btn");
        } else {
            btn.disabled = false;
            btn.classList.remove("disabled-btn");
        }
    }

    prevPage(): void {
        this._pageNumber--;
        this.updateCounter();
    }

    nextPage(): void {
        this._pageNumber++;
        this.updateCounter();
    }
}