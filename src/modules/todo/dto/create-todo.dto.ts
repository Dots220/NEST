import { Column } from 'typeorm'
import { IsBoolean, Length } from 'class-validator'

export class CreateTodoDto {
   @Length(1, 30, { message: 'Вы ничего не ввели' })
   readonly text: string

   @IsBoolean()
   readonly checked: boolean
}
