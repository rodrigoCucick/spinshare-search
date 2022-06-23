import { View } from "./View.js";
export class PagerButtonView extends View {
    template(model) {
        return `<button id="btnPrevious" class="pager-button margin-bottom-10">${model}</button>`;
    }
}
