import { Column } from 'typeorm'
import { IsBoolean, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateTodoDto {
   @ApiProperty({ example: 'Сходить в магазин' })
   @Length(1, 30, { message: 'Вы ничего не ввели' })
   readonly text: string

   @ApiProperty({ default: false })
   @IsBoolean()
   readonly checked: boolean
}
