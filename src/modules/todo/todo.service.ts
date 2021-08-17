import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'
import { CreateTodoDto } from './dto/create-todo.dto'
import { Todo } from './todo.entity'
import { User } from '../user/user.entity'

@Injectable()
export class TodoService {
   constructor(
      @InjectRepository(Todo)
      private todosRepository: Repository<Todo>,
   ) {}

   public async create(todoPayload: CreateTodoDto, user: User): Promise<Todo> {
      const todo = await this.todosRepository.save({
         ...todoPayload,
         user,
      })

      delete todo['user']

      return todo
   }

   async getAll() {
      return this.todosRepository.find()
   }

   async getAllByUser(id: number) {
      return this.todosRepository.find({
         where: {
            user: {
               id,
            },
         },
      })
   }

   public async edit(id: number, userId: number, body) {
      // return this.todosRepository.update({ id }, body)

      await getConnection()
         .createQueryBuilder()
         .update(User)
         .set(body)
         .where('id = :id', { id })
         .andWhere()
         .execute()
   }

   public getTodoById(todoId: number) {
      return this.todosRepository.findOne({ where: { id: todoId } })
   }

   public async deleteById(todoId: number, userId: number) {
      await getConnection()
         .createQueryBuilder()
         .delete()
         .from(Todo)
         .where('id = :todoId', { todoId })
         .andWhere('userId = :userId', { userId })
         .execute()
   }
}
