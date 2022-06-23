export class MainView {
    constructor() {
        // API status.
        this._apiStatusDiv = document.querySelector(".api-status-div");
        // Form data.
        this._searchQuery = document.querySelector("#searchQuery");
        this._diffEasy = document.querySelector("#diffEasy");
        this._diffNormal = document.querySelector("#diffNormal");
        this._diffHard = document.querySelector("#diffHard");
        this._diffExpert = document.querySelector("#diffExpert");
        this._diffXD = document.querySelector("#diffXD");
        this._diffRatingFrom = document.querySelector("#diffRatingFrom");
        this._diffRatingTo = document.querySelector("#diffRatingTo");
        this._showExplicit = document.querySelector("#showExplicit");
        // Results table.
        this._resultsTableDiv = document.querySelector("#results-table-div");
    }
    get apiStatusDiv() {
        return this._apiStatusDiv;
    }
    get diffRatingFromValue() {
        return Number.parseInt(this._diffRatingFrom.value);
    }
    get diffRatingToValue() {
        return Number.parseInt(this._diffRatingTo.value);
    }
    apiStatusTemplate(pong) {
        let status = "";
        if (pong == null) {
            status = "RETRIEVING";
        }
        else {
            status = pong ? "ONLINE" : "OFFLINE";
        }
        return `<p id="api-status" class="centered-text">SpinShare API status: <b>${status}</b></p>`;
    }
    updateApiStatus(pong) {
        this.apiStatusDiv.innerHTML = this.apiStatusTemplate(pong);
    }
    resultsTableTemplate(json) {
        return `
            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>TITLE</th>
                        <th>ARTIST</th>
                        <th>CHARTER</th>
                        <th>EASY</th>
                        <th>NORMAL</th>
                        <th>HARD</th>
                        <th>EXPERT</th>
                        <th>XD</th>
                        <th>DOWNLOAD</th>
                    </tr>
                </thead>
                <tbody>
                    ${json.data.map((object) => {
            return `
                            <tr>
                                <td><img class="table-img-size" src="${object.cover}" alt="COVER"></td>
                                <td>${object.title}</td>
                                <td>${object.artist}</td>
                                <td>${object.charter}</td>
                                <td>${object.easyDifficulty}</td>
                                <td>${object.normalDifficulty}</td>
                                <td>${object.hardDifficulty}</td>
                                <td>${object.expertDifficulty}</td>
                                <td>${object.XDDifficulty}</td>
                                <td><a href="${object.zip}">LINK</a></td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    updateResultsTable(json) {
        this._resultsTableDiv.innerHTML = this.resultsTableTemplate(json);
    }
    get jsonBody() {
        return JSON.stringify({
            searchQuery: this._searchQuery.value,
            diffEasy: this._diffEasy.checked,
            diffNormal: this._diffNormal.checked,
            diffHard: this._diffHard.checked,
            diffExpert: this._diffExpert.checked,
            diffXD: this._diffXD.checked,
            diffRatingFrom: this._diffRatingFrom.value,
            diffRatingTo: this._diffRatingTo.value,
            showExplicit: this._showExplicit.checked
        });
    }
}
