import { domElement } from "../decorator/DomElement.js";

export class PagerController {
    // Pager elements.
    @domElement("#pagerContainer")
    private _pagerContainer: HTMLElement;

    @domElement("#btnPrevious")
    private _prevBtn: HTMLButtonElement;

    @domElement("#btnNext")
    private _nextBtn: HTMLButtonElement;

    @domElement("#pageCounter")
    private _counter: HTMLElement;

    // Pager control variables.
    private _pageNumber: number;
    private _totalPages: number;
    private _totalCharts: number;

    get nextBtn(): HTMLButtonElement {
        return this._nextBtn;
    }

    get pageNumber(): number {
        return this._pageNumber;
    }

    get prevBtn(): HTMLButtonElement {
        return this._prevBtn;
    }

    public setCounterInitialState(total: number): void {
        this._pageNumber = 1;
        this._totalCharts = total;
        this.calculateTotalPages();
        this.updateCounter();
    }

    public prevPage(): void {
        this._pageNumber--;
        this.updateCounter();
    }

    public nextPage(): void {
        this._pageNumber++;
        this.updateCounter();
    }

    public enableDisablePagerButtons(): void {
        this.enableDisableButton(this._prevBtn, this.pageNumber == 1);
        this.enableDisableButton(this._nextBtn, this.pageNumber == this._totalPages);
    }

    public showPager(): void {
        this._pagerContainer.classList.remove("hidden");
    }

    public hidePager(): void {
        this._pagerContainer.classList.add("hidden");
    }

    private updateCounter(): void {
        this._counter.innerHTML = `Page ${this._pageNumber}/${this._totalPages} — ${this._totalCharts} Charts`;
    }

    private calculateTotalPages(): void {
        this._totalPages = Math.ceil(this._totalCharts / 50);
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
}