import { ChartInteractionDate } from "./ChartInteractionDate.js";

export type ChartData = {
    id: number;
    title: string;
    subtitle: string;
    artist: string;
    charter: string;
    uploader: number;
    fileReference: string;
    tags: Array<string>;
    views: number;
    downloads: number;
    isExplicit: boolean;
    publicationStatus: number;
    hasEasyDifficulty: boolean;
    hasNormalDifficulty: boolean;
    hasHardDifficulty: boolean;
    hasExtremeDifficulty: boolean;
    hasXDDifficulty: boolean;
    easyDifficulty: number;
    normalDifficulty: number;
    hardDifficulty: number;
    expertDifficulty: number;
    XDDifficulty: number;
    uploadDate: ChartInteractionDate;
    updateDate: ChartInteractionDate;
    updateHash: string;
    description: string;
    cover: string; // URL.
    zip: string; // URL.
}