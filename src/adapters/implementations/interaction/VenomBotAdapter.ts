import { create } from 'venom-bot'
import { Interaction } from '../../Interaction';
import config from '../../../config/env'

export class VenomBotAdapter implements Interaction {

    async question(text: string): Promise<string> {
        const client = await this.getClient()
        await client.sendText(config.phoneNumber, text)
        return new Promise((resolve) => {
            client.onAnyMessage(message => {
                resolve(message.body)
            })
        })
        
    }

    async questionYesOrNo(text: string): Promise<string | boolean> {
        const client = await this.getClient()
        await client.sendText(config.phoneNumber, text)
        return new Promise((resolve) => {
            client.onAnyMessage(message => {
                resolve(message.body)
            })
        })
    }

    private async getClient() {
        
        const client = await create('schedule', undefined, undefined, { disableWelcome: true })
        if (!client) {
            throw new Error()
        }
        
        return client
    }
}