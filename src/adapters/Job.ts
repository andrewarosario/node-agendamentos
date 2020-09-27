export type JobCallback = () => void;

export interface Job {
    schedule(date: string, callback: JobCallback): void
}