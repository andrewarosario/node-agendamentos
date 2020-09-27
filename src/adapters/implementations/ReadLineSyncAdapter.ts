import { Interaction } from "../Interaction";
import readlineSync from 'readline-sync'

export class ReadLineSyncAdapter implements Interaction {
    question(text: string): Promise<string> {
        return Promise.resolve(readlineSync.question(text))
    }

    questionYesOrNo(text: string): Promise<string | boolean> {
        return Promise.resolve(readlineSync.keyInYN(text))
    }
}