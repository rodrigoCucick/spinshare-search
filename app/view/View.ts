export abstract class View<T> {
    private _element: HTMLElement;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    // Getter used for adding event listeners to this element (RequestController).
    get element(): HTMLElement {
        return this._element;
    }

    abstract template(model: T): string;

    update(model: T): void {
        this._element.innerHTML = this.template(model);
    }

    hide(): void {
        this._element.classList.add("hidden");
    }

    show(): void {
        this._element.classList.remove("hidden");
    }
}