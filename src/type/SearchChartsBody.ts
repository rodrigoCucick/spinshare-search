import { ChartData } from "./ChartData";

export type SearchChartsBody = {
    version: number;
    status: number;
    data: Array<ChartData>;
}