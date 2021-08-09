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

   async create(todo: CreateTodoDto, user: User) {
      return this.todosRepository.save({
         ...todo,
         user,
      })
   }

   async getAll() {
      return this.todosRepository.find()
   }

   async getAllByUser(id: number) {
      return this.todosRepository.find({ where: { userId: id } })
   }

   public edit(id: number, body) {
      return this.todosRepository.update({ id }, body)
   }

   public getTodoByUser(id: number) {
      return this.todosRepository.find({ where: { userId: id } })
   }

   public getTodoById(idTodo: number) {
      return this.todosRepository.findOne({ where: { id: idTodo } })
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
