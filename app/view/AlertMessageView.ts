import { View } from "./View.js";

export class AlertMessageView extends View<string> {
    protected template(model: string): string {
        return `<p>${model}</p>`;
    }
}