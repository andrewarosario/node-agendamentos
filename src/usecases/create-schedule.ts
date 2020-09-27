import { Interaction } from "../adapters/Interaction";
import { CreateSchedule } from "../domain/create-schedule";
import { Schedule } from "../domain/models/Schedule";

export class CreateScheduleUseCase implements CreateSchedule {

    constructor(
        private readonly interaction: Interaction
    ) {}

    async create(): Promise<Schedule> {
        const name = await this.interaction.question('Digite o nome do agendamento: ')
        const date = await this.interaction.question('Digite a data: ')
        const hour = await this.interaction.question('Digite a hora: ')
        const sendEmail = await this.interaction.questionYesOrNo('Deseja enviar uma notificação por email? ')
        const email = sendEmail ? await this.interaction.question('Digite o email: ') : ''
        
        const schedule = { name, date, hour, email }
        
        console.log('Agendamento criado com sucesso!', schedule);
        return schedule
    }

}