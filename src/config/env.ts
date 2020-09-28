import { InteractionTypes } from "../adapters/implementations/interaction/InteractionTypes";

require('dotenv').config();

export default {
    interactionType: process.env.INTERACTION_TYPE as InteractionTypes || InteractionTypes.Terminal,
    phoneNumber: process.env.PHONE_NUMBER || '',
}