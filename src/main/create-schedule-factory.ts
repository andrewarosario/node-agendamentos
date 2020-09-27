import { CreateSchedule } from "../domain/create-schedule";
import { CreateScheduleUseCase } from "../usecases/create-schedule";
import { ReadLineSyncProvider } from "../providers/implementations/ReadLineSyncProvider";

export const createScheduleFactory = (): CreateSchedule => {
    const interaction = new ReadLineSyncProvider()
    return new CreateScheduleUseCase(interaction)
}