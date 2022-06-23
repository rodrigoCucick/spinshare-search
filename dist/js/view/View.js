export class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    // Getter used for adding event listeners to this element (RequestController).
    get element() {
        return this._element;
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    hide() {
        this._element.classList.add("hidden");
    }
    show() {
        this._element.classList.remove("hidden");
    }
}
