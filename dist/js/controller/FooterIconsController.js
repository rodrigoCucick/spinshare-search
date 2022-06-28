import { FooterIconsView } from "../view/FooterIconsView.js";
import { AlertsController } from "./AlertsController.js";
export class FooterIconsController {
    constructor() {
        this._footerIconsView = new FooterIconsView("#footerIconsView");
        this._footerIconsView.update("");
        this._ghRepoIcon = document.querySelector("#ghRepoIcon");
        this._helpIcon = document.querySelector("#helpIcon");
        this._helpIcon.addEventListener("click", () => {
            AlertsController.setSmallPadding();
            AlertsController.showAlert("Extract the downloaded file contents to the following folder:<br>Users\\<b>YOUR_USERNAME</b>\\AppData\\LocalLow\\Super Spin Digital\\Spin Rhythm XD\\Custom");
        });
    }
}
