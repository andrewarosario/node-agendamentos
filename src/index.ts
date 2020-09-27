import readlineSync from 'readline-sync'

const nome = readlineSync.question('Digite o nome do agendamento: ')
const data = readlineSync.question('Digite a data: ')
const hora = readlineSync.question('Digite a hora: ')
const notificacaoPorEmail = readlineSync.keyInYN('Deseja enviar uma notificação por email? ')
const email = notificacaoPorEmail ? readlineSync.question('Digite o email: ') : ''

const agendamento = { nome, data, hora, email }

console.log('Agendamento criado com sucesso!', agendamento);