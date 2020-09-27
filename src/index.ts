import { createScheduleFactory } from "./main/create-schedule-factory";
import { createJobFactory } from "./main/create-job-factory";
import { ScheduleJob } from "./presentation/schedule-job";

const scheduleJob = new ScheduleJob(
    createScheduleFactory(),
    createJobFactory()
)

scheduleJob.create()