import { ChartData } from "../type/ChartData.js";
import { SearchChartsBody } from "../type/SearchChartsBody.js";
import { View } from "./View.js";

export class SearchResultsView extends View<SearchChartsBody> {
    // Table variables.
    private _tableClasses: string = "table table-dark table-striped table-hover";
    private _downloadIcon: string = "./res/downloadIcon.png";
    private _fallbackAlbumArt: string = "./res/defaultAlbumArt.jpg";

    // Pager variables.
    private _pageNumber: number = 1;
    private _resultsPerPage: number = 50;

    protected template(model: SearchChartsBody): string {
        return `
        <table class="${this._tableClasses}">
            <thead>
                <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">ART</th>
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
            ${model.data.map((chart: ChartData, index: number) => {
                if (this.isInPaginationBoundaries(index)) {
                    return `
                    <tr>
                        <td class="text-center" title="Chart ID: ${chart.id}">${index + 1}</td>
                        <td class="text-left" style="width: 60px;"><img class="table-img" style="z-index: ${model.data.length - index};" src="${chart.cover}" onerror="this.src='${this._fallbackAlbumArt}'"></td>
                        <td class="text-left" title="Description: ${chart.description == null ? 'N/A' : chart.description}">${chart.title == '' ? "N/A" : chart.title}</td>
                        <td class="text-left">${chart.artist == '' ? "N/A" : chart.artist}</td>
                        <td class="text-left">${chart.charter  == '' ? "N/A" : chart.charter}</td>
                        <td class="text-center">${chart.easyDifficulty == null ? "N/A" : chart.easyDifficulty}</td>
                        <td class="text-center">${chart.normalDifficulty == null ? "N/A" : chart.normalDifficulty}</td>
                        <td class="text-center">${chart.hardDifficulty == null ? "N/A" : chart.hardDifficulty}</td>
                        <td class="text-center">${chart.expertDifficulty == null ? "N/A" : chart.expertDifficulty}</td>
                        <td class="text-center">${chart.XDDifficulty == null ? "N/A" : chart.XDDifficulty}</td>
                        <td class="text-center"><a href="${chart.zip == '' ? "N/A" : chart.zip}"><img class="download-btn-size" src="${this._downloadIcon}" title="Click to download! ${chart.downloads} downloads."></a></td>
                    </tr>
                    `
                }
            }).join('')}
            </tbody>
        </table>
        `
    }

    set pageNumber(pageNumber: number) {
        this._pageNumber = pageNumber;
    }

    private isInPaginationBoundaries(index: number): boolean {
        return index >= this.calcLowerPaginationBoundaries()
            && index <= this.calcUpperPaginationBoundaries();
    }

    private calcLowerPaginationBoundaries(): number {
        return (this._pageNumber * this._resultsPerPage) - this._resultsPerPage;
    }

    private calcUpperPaginationBoundaries(): number {
        return (this._pageNumber * this._resultsPerPage) - 1;
    }
}