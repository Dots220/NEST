import { HttpStatus } from '@nestjs/common'

export interface DeleteUser {
   status: HttpStatus
   error?: string
   message?: string
}

export interface GetUserByIdResponse {
   data?: any
   status: HttpStatus
   error?: string
}

export interface CreateUser {
   email: string
   password: string
}
