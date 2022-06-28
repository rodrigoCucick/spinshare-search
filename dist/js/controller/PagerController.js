var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domElement } from "../decorator/DomElement.js";
export class PagerController {
    get nextBtn() {
        return this._nextBtn;
    }
    get pageNumber() {
        return this._pageNumber;
    }
    get prevBtn() {
        return this._prevBtn;
    }
    setCounterInitialState(total) {
        this._pageNumber = 1;
        this._totalCharts = total;
        this.calculateTotalPages();
        this.updateCounter();
    }
    prevPage() {
        this._pageNumber--;
        this.updateCounter();
    }
    nextPage() {
        this._pageNumber++;
        this.updateCounter();
    }
    enableDisablePagerButtons() {
        this.enableDisableButton(this._prevBtn, this.pageNumber == 1);
        this.enableDisableButton(this._nextBtn, this.pageNumber == this._totalPages);
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
__decorate([
    domElement("#pagerContainer")
], PagerController.prototype, "_pagerContainer", void 0);
__decorate([
    domElement("#btnPrevious")
], PagerController.prototype, "_prevBtn", void 0);
__decorate([
    domElement("#btnNext")
], PagerController.prototype, "_nextBtn", void 0);
__decorate([
    domElement("#pageCounter")
], PagerController.prototype, "_counter", void 0);
