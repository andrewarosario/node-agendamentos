import { Interaction } from "../providers/Interaction";
import { CreateSchedule } from "../domain/create-schedule";
import { Schedule } from "../domain/models/Schedule";

export class CreateScheduleUseCase implements CreateSchedule {

    constructor(
        private readonly interaction: Interaction
    ) {}

    create(): Schedule {
        const name = this.interaction.question('Digite o nome do agendamento: ')
        const date = this.interaction.question('Digite a data: ')
        const hour = this.interaction.question('Digite a hora: ')
        const sendEmail = this.interaction.questionYesOrNo('Deseja enviar uma notificação por email? ')
        const email = sendEmail ? this.interaction.question('Digite o email: ') : ''
        
        const schedule = { name, date, hour, email }
        
        console.log('Agendamento criado com sucesso!', schedule);
        return schedule
    }

}