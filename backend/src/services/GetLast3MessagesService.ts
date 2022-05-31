import { io } from '../app';
import prismaClient from '../prisma';

class GetLast3MessagesService {
  async execute(){
    const messages = await prismaClient.message.findMany({
      take: 3, //limite de dados
      orderBy: {
        created_at: "desc" //A mais nova para a mais velha
      },
      include: {
        user: true // Pegue as informações no usuário
      }
    })

    // SELECT * FROM MESSAGES -> Inner Joi
    // SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC

    return messages;
  }
}

export { GetLast3MessagesService };