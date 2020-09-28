import { CreateSchedule } from "../domain/create-schedule";
import { CreateScheduleUseCase } from "../usecases/create-schedule";
import { ReadLineSyncAdapter } from "../adapters/implementations/interaction/ReadLineSyncAdapter";
import { VenomBotAdapter } from "../adapters/implementations/interaction/VenomBotAdapter";
import { InteractionStrategy } from "../adapters/implementations/interaction/InteractionStrategy";
import config from '../config/env'

export const createScheduleFactory = (): CreateSchedule => {
    const interactionStrategy = new InteractionStrategy(
        config.interactionType,
        new ReadLineSyncAdapter(),
        new VenomBotAdapter()
    )
    const interaction = interactionStrategy.execute()
    
    return new CreateScheduleUseCase(interaction)
}