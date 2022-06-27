export class RequestService {
    static ping(url) {
        return fetch(url)
            .then(response => response.json());
    }
    static searchCharts(url, requestJsonBody) {
        return fetch(url, { method: "POST", body: requestJsonBody })
            .then(response => response.json());
    }
}
