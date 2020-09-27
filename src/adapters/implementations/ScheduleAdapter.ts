import { Job, JobCallback } from "../Job";
import schedule from 'node-schedule'

export class ScheduleAdapter implements Job {
    schedule(date: string, callback: JobCallback) {
        schedule.scheduleJob(date, callback)
    }
}