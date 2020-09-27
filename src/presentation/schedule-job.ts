import { CreateSchedule } from "../domain/create-schedule";
import { CreateJob } from "../domain/create-job";

export class ScheduleJob {
    constructor(
        private readonly createSchedule: CreateSchedule,
        private readonly createJob: CreateJob,
    ) {}

    create() {
        const schedule = this.createSchedule.create()
        this.createJob.create(schedule)
    }
}