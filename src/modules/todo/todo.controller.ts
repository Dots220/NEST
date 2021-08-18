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
import { EditTodoDto } from './dto/edit-todo.dto'
import {
   ApiBearerAuth,
   ApiHeader,
   ApiOperation,
   ApiResponse,
} from '@nestjs/swagger'
import { Todo } from './todo.entity'

@Controller('todo')
export class TodoController {
   constructor(
      private todoService: TodoService,
      private authService: AuthService,
      private userService: UserService,
   ) {}

   @ApiHeader({ name: 'headers', description: 'Contain token' })
   @ApiOperation({ summary: 'Создание todo' })
   @Post()
   public async create(@Headers() headers, @Body() todoDto: CreateTodoDto) {
      const userId = await this.authService.decodeToken(headers.token)
      const userCandidate = await this.userService.findById(userId)

      const todo = await this.todoService.create(todoDto, userCandidate)

      return todo
   }

   @ApiOperation({ summary: 'Получение всех todo пользователя' })
   @ApiResponse({
      status: 200,
      type: [Todo],
   })
   @Get()
   public async getTodosByUserId(@Headers() headers) {
      const userId = await this.authService.decodeToken(headers.token)
      if (!userId) {
         return {
            error: 'Unauthorized',
            status: HttpStatus.UNAUTHORIZED,
         }
      }
      return await this.todoService.getAllByUser(userId)
   }

   @ApiOperation({ summary: 'Изменение todo' })
   @Put('/:id')
   public async editTodo(
      @Body() body: EditTodoDto,
      @Param() params,
      @Headers() headers,
   ) {
      const userId = await this.authService.decodeToken(headers.token)

      console.log('Работает')
      return await this.todoService.edit(params.id, userId, body)
   }

   @ApiOperation({ summary: 'Удаление' })
   @Delete('/:id')
   public async deleteTodo(@Headers() headers, @Param() params) {
      const userId = await this.authService.decodeToken(headers.token)
      return this.todoService.deleteById(params.id, userId)
   }
}
