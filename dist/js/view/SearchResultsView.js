import { View } from "./View.js";
export class SearchResultsView extends View {
    constructor() {
        super(...arguments);
        this._tableClasses = "table table-dark table-striped table-hover";
        this._pageNumber = 1;
    }
    template(model) {
        return `
        <table class="${this._tableClasses}">
            <thead>
                <tr>
                    <th class="text-left">ART</th>
                    <th class="text-left">TITLE</th>
                    <th class="text-left">ARTIST</th>
                    <th class="text-left">CHARTER</th>
                    <th class="text-center">EASY</th>
                    <th class="text-center">NORMAL</th>
                    <th class="text-center">HARD</th>
                    <th class="text-center">EXPERT</th>
                    <th class="text-center">XD</th>
                    <th class="text-center">DOWNLOAD</th>
                </tr>
            </thead>
            <tbody>
            ${model.data.map((object, index) => {
            if (index >= (this._pageNumber * 50) - 50 && index <= (this._pageNumber * 50) - 1) {
                return `
                    <tr>
                        <td class="text-left" style="width: 60px;"><img class="table-img" style="z-index: ${model.data.length - index};" src="${object.cover}" onerror="this.src='./res/defaultAlbumArt.jpg'"></td>
                        <td class="text-left">${object.title == null ? "N/A" : object.title}</td>
                        <td class="text-left">${object.artist == null ? "N/A" : object.artist}</td>
                        <td class="text-left">${object.charter == null ? "N/A" : object.charter}</td>
                        <td class="text-center">${object.easyDifficulty == null ? "N/A" : object.easyDifficulty}</td>
                        <td class="text-center">${object.normalDifficulty == null ? "N/A" : object.normalDifficulty}</td>
                        <td class="text-center">${object.hardDifficulty == null ? "N/A" : object.hardDifficulty}</td>
                        <td class="text-center">${object.expertDifficulty == null ? "N/A" : object.expertDifficulty}</td>
                        <td class="text-center">${object.XDDifficulty == null ? "N/A" : object.XDDifficulty}</td>
                        <td class="text-center"><a href="${object.zip == null ? "N/A" : object.zip}"><img class="download-btn-size" src="./res/downloadIcon.png"></a></td>
                    </tr>
                    `;
            }
        }).join('')}
            </tbody>
        </table>
        `;
    }
    set pageNumber(pageNumber) {
        this._pageNumber = pageNumber;
    }
}
