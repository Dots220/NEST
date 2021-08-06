import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTodoDto } from './dto/create-todo.dto'
import { Todo } from './todo.entity'
import { EditTodoDto } from './dto/edit-todo.dto'

@Injectable()
export class TodoService {
   constructor(
      @InjectRepository(Todo)
      private todosRepository: Repository<Todo>,
   ) {}

   async create(todo: CreateTodoDto) {
      return this.todosRepository.save(todo)
   }

   async getAll() {
      return this.todosRepository.find()
   }

   public async edit(id: number, body) {
      const result = await this.todosRepository.update({ id }, body)
      return result
   }
}
