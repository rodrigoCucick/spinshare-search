export class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    // Getter should be used only for adding event listeners to this element.
    get element() {
        return this._element;
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    show() {
        this._element.classList.remove("hidden");
    }
    hide() {
        this._element.classList.add("hidden");
    }
}
