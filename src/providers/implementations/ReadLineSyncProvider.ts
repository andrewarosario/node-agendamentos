import { Interaction } from "../Interaction";
import readlineSync from 'readline-sync'

export class ReadLineSyncProvider implements Interaction {
    question(text: string): string {
        return readlineSync.question(text)
    }

    questionYesOrNo(text: string): string | boolean {
        return readlineSync.keyInYN(text)
    }
}