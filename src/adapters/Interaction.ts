export interface Interaction {
    question(text: string): Promise<string>
    questionYesOrNo(text: string): Promise<string | boolean>
}