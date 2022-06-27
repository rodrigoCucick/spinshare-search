import { View } from "./View.js";
export class AlertMessageView extends View {
    template(model) {
        return `<p>${model}</p>`;
    }
}
