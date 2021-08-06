import { Module } from '@nestjs/common'
import { TodoController } from './todo.controller'
import { TodoSharedModule } from './todo-shared.module'

@Module({
   imports: [TodoSharedModule],
   controllers: [TodoController],
})
export class TodoModule {}
