import { CreateSchedule } from "../domain/create-schedule";
import { CreateJob } from "../domain/create-job";

export class ScheduleJob {
    constructor(
        private readonly createSchedule: CreateSchedule,
        private readonly createJob: CreateJob,
    ) {}

    async create() {
        const schedule = await this.createSchedule.create()
        this.createJob.create(schedule)
    }
}