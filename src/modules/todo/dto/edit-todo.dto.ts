import { IsBoolean, IsNotEmpty, Length } from 'class-validator'

export class EditTodoDto {
   @IsNotEmpty()
   readonly id: string

   @Length(1, 30, { message: 'Вы ничего не ввели' })
   readonly text: string

   @IsBoolean()
   readonly checked: boolean
}
