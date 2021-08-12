import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
   @IsEmail()
   readonly email: string

   @IsString()
   @MinLength(6)
   @MaxLength(35)
   readonly password: string
}
