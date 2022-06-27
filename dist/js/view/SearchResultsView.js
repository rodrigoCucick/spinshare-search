import { View } from "./View.js";
export class SearchResultsView extends View {
    constructor() {
        super(...arguments);
        // Table variables.
        this._tableClasses = "table table-dark table-striped table-hover";
        this._downloadIcon = "./res/downloadIcon.png";
        this._fallbackAlbumArt = "./res/defaultAlbumArt.jpg";
        // Pager variables.
        this._pageNumber = 1;
        this._resultsPerPage = 50;
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
            ${model.data.map((chart, index) => {
            if (this.isInPaginationBoundaries(index)) {
                return `
                    <tr>
                        <td class="text-left" style="width: 60px;"><img class="table-img" style="z-index: ${model.data.length - index};" src="${chart.cover}" onerror="this.src='${this._fallbackAlbumArt}'"></td>
                        <td class="text-left">${chart.title == null ? "N/A" : chart.title}</td>
                        <td class="text-left">${chart.artist == null ? "N/A" : chart.artist}</td>
                        <td class="text-left">${chart.charter == null ? "N/A" : chart.charter}</td>
                        <td class="text-center">${chart.easyDifficulty == null ? "N/A" : chart.easyDifficulty}</td>
                        <td class="text-center">${chart.normalDifficulty == null ? "N/A" : chart.normalDifficulty}</td>
                        <td class="text-center">${chart.hardDifficulty == null ? "N/A" : chart.hardDifficulty}</td>
                        <td class="text-center">${chart.expertDifficulty == null ? "N/A" : chart.expertDifficulty}</td>
                        <td class="text-center">${chart.XDDifficulty == null ? "N/A" : chart.XDDifficulty}</td>
                        <td class="text-center"><a href="${chart.zip == null ? "N/A" : chart.zip}"><img class="download-btn-size" src="${this._downloadIcon}"></a></td>
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
    isInPaginationBoundaries(index) {
        return index >= this.calcLowerPaginationBoundaries()
            && index <= this.calcUpperPaginationBoundaries();
    }
    calcLowerPaginationBoundaries() {
        return (this._pageNumber * this._resultsPerPage) - this._resultsPerPage;
    }
    calcUpperPaginationBoundaries() {
        return (this._pageNumber * this._resultsPerPage) - 1;
    }
}
