import { CreateJob } from "../domain/create-job"
import { CreateJobUseCase } from "../usecases/create-job"
import { ScheduleAdapter } from "../adapters/implementations/ScheduleAdapter"

export const createJobFactory = (): CreateJob => {
    const job = new ScheduleAdapter()
    return new CreateJobUseCase(job)
}