import {
   Body,
   Controller,
   Get,
   Param,
   Post,
   Put,
   Headers,
   Delete,
   HttpStatus,
} from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { AuthService } from '../auth/auth.service'
import { UserService } from '../user/user.service'

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
   public async getTodosByUserId(@Headers() headers, @Param() params) {
      const userId = await this.authService.decodeToken(headers.token)
      if (!userId) {
         return {
            error: 'Unauthorized',
            status: HttpStatus.UNAUTHORIZED,
         }
      }
      return await this.todoService.getAllByUser(userId)
   }

   @Put('/:id')
   public async editTodo(@Body() body, @Param() params, @Headers() headers) {
      const userId = await this.authService.decodeToken(headers.token)
      /*console.log(userId)
      console.log('params:', params)
      const todos = await this.todoService.getAllByUser(userId)
      const check = todos.find((todo) => todo.id == params.id)
      console.log('check:', check)
      console.log('body:', body)*/

      if (check) {
         console.log('Работает')
         return await this.todoService.edit(params.id, body)
      }
      throw 'Чужая todo'
   }

   @Delete('/:id')
   public async deleteTodo(@Headers() headers, @Param() params) {
      const userId = await this.authService.decodeToken(headers.token)
      return this.todoService.deleteById(params.id, userId)
   }
}
