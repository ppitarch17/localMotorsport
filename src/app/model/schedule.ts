import { Championship } from "./championship";

export interface Schedule {
    raceName: string;
    date: string;
    past: boolean;
    time: string;
    Circuit: {
        Location: {
            country: string;
        }
        };
    round: string;
    championship: Championship;
    Results: any;
}