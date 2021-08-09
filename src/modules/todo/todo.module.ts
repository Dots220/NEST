import { Module } from '@nestjs/common'
import { TodoController } from './todo.controller'
import { TodoSharedModule } from './todo-shared.module'
import { AuthSharedModule } from '../auth/auth-shared.module'
import { UserSharedModule } from '../user/user-shared.module'

@Module({
   imports: [TodoSharedModule, AuthSharedModule, UserSharedModule],
   controllers: [TodoController],
})
export class TodoModule {}
