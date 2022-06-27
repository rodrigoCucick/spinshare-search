import { PingBody } from "../type/PingBody.js";
import { SearchChartsBody } from "../type/SearchChartsBody.js";

export class RequestService {
    public static ping(url: string): Promise<PingBody> {
        return fetch(url)
        .then(response => response.json());
    }

    public static searchCharts(url: string, requestJsonBody: string): Promise<SearchChartsBody> {
        return fetch(url, { method: "POST", body: requestJsonBody })
        .then(response => response.json());
    }
}