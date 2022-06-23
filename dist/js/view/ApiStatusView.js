import { View } from "./View.js";
export class ApiStatusView extends View {
    template(model) {
        let status = "RETRIEVING";
        if (model != null) {
            status = model ? "ONLINE" : "OFFLINE";
        }
        return `<p id="api-status" class="centered-text">SpinShare API status: <b>${status}</b></p>`;
    }
}
