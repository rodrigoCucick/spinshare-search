import { View } from "./View.js";
export class PagerCounterView extends View {
    template(model) {
        return `<span id="pageCounter" class="page-counter-text margin-bottom-10">${model}</span>`;
    }
}
