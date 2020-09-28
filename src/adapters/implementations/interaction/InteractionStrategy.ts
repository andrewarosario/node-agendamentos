import { ReadLineSyncAdapter } from "./ReadLineSyncAdapter"
import { VenomBotAdapter } from "./VenomBotAdapter"
import { Interaction } from "../../Interaction"
import { InteractionTypes } from "./InteractionTypes"

export class InteractionStrategy {
    constructor(
        private readonly interactionType: InteractionTypes,
        private readonly readLineSyncAdapter: ReadLineSyncAdapter,
        private readonly venomBotAdapter: VenomBotAdapter,
    ) {}

    execute(): Interaction {
        const types = {
            [InteractionTypes.Terminal]: this.readLineSyncAdapter,
            [InteractionTypes.WhatsApp]: this.venomBotAdapter
        }

        return types[this.interactionType]
    }

}
