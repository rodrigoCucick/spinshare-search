export abstract class View<T> {
    private _element: HTMLElement;

    constructor(selector: string) {
        this._element = document.querySelector(selector);
    }

    protected abstract template(model: T): string;

    // Getter should be used only for adding event listeners to this element.
    get element(): HTMLElement {
        return this._element;
    }

    public update(model: T): void {
        this._element.innerHTML = this.template(model);
    }

    public show(): void {
        this._element.classList.remove("hidden");
    }

    public hide(): void {
        this._element.classList.add("hidden");
    }
}