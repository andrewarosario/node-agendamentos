import { CreateSchedule } from "../domain/create-schedule";
import { CreateScheduleUseCase } from "../usecases/create-schedule";
import { ReadLineSyncAdapter } from "../adapters/implementations/ReadLineSyncAdapter";

export const createScheduleFactory = (): CreateSchedule => {
    const interaction = new ReadLineSyncAdapter()
    return new CreateScheduleUseCase(interaction)
}