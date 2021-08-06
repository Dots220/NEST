import {
   Body,
   Controller,
   Get,
   Param,
   Post,
   Put,
   Headers,
} from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { AuthService } from '../auth/auth.service'
import { UserService } from '../user/user.service'

@Controller('todo')
export class TodoController {
   constructor(
      private todoService: TodoService, // private authService: AuthService, // private userService: UserService,
   ) {}

   @Post()
   public async create(@Headers() headers, @Body() todoDto: CreateTodoDto) {
      // const userId = await this.authService.decodeToken(headers.token)
      // const user = await this.userService.findById(userId)
      // const todo = { ...todoDto, user: user }
      // return await this.todoService.create(todo)
   }

   @Get()
   public async getTodos(@Param() params) {
      return await this.todoService.getAll()
   }

   @Put('/:id')
   public async editTodo(@Body() body, @Param() params) {
      return await this.todoService.edit(params.id, body)
   }
}
