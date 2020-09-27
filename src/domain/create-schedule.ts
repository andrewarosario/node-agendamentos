import { Schedule } from "./models/Schedule";

export interface CreateSchedule {
    create(): Promise<Schedule>
}