import { IsBoolean, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class EditTodoDto {
   @ApiProperty()
   @Length(1, 30, { message: 'Вы ничего не ввели' })
   readonly text: string

   @ApiProperty()
   @IsBoolean()
   readonly checked: boolean
}
