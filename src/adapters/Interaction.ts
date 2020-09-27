export interface Interaction {
    question(text: string): string
    questionYesOrNo(text: string): string | boolean
}