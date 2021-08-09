import {
   Body,
   Controller,
   Get,
   Param,
   Post,
   Put,
   Headers,
   Delete,
} from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { AuthService } from '../auth/auth.service'
import { UserService } from '../user/user.service'
import retryTimes = jest.retryTimes

@Controller('todo')
export class TodoController {
   constructor(
      private todoService: TodoService,
      private authService: AuthService,
      private userService: UserService,
   ) {}

   @Post()
   public async create(@Headers() headers, @Body() todoDto: CreateTodoDto) {
      const userId = await this.authService.decodeToken(headers.token)
      const userCandidate = await this.userService.findById(userId)

      const todo = await this.todoService.create(todoDto, userCandidate)

      return todo
   }

   @Get()
   public async getTodos(@Param() params) {
      return await this.todoService.getAll()
   }

   @Get()
   public async getTodosByUserId(@Headers() headers, @Param() params) {
      const userId = await this.authService.decodeToken(headers.token)
      return await this.todoService.getAllByUser(userId)
   }

   @Put('/:id')
   public async editTodo(@Body() body, @Param() params) {
      return await this.todoService.edit(params.id, body)
   }

   @Delete('/:id')
   public async deleteTodo(@Headers() headers, @Param() params) {
      const userId = await this.authService.decodeToken(headers.token)
      return this.todoService.deleteById(params.id, userId)
   }
}
