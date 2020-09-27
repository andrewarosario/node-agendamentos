import { CreateJob } from "../domain/create-job";
import { Schedule } from "../domain/models/Schedule";
import { Job } from "../adapters/Job";

export class CreateJobUseCase implements CreateJob {
    constructor(
        private readonly job: Job
    ) {}

    create(schedule: Schedule): void {
        const dateAndHour = schedule.date + ' ' + schedule.hour
        this.job.schedule(dateAndHour, () => {
            console.log('Compromisso agendado!!', schedule)
        })
    }
}