import { Schedule } from "./models/Schedule";

export interface CreateJob {
    create(schedule: Schedule): void
}