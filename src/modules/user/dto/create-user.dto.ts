import {
   IsEmail,
   IsNotEmpty,
   IsPhoneNumber,
   IsString,
   MaxLength,
   MinLength,
} from 'class-validator'

export class CreateUserDto {
   @IsEmail()
   readonly email: string

   @IsNotEmpty()
   @IsPhoneNumber('RU', {
      message: 'Введите пожалуйста украинский номер телефона',
   })
   readonly phone: string

   @IsString()
   @MinLength(6)
   @MaxLength(35)
   readonly password: string
}
