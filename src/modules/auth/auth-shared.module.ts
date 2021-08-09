import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'

@Module({
   imports: [
      JwtModule.register({
         secret: process.env.PRIVATE_KEY || 'SECRET',
         signOptions: {
            expiresIn: '24h',
         },
      }),
   ],
   providers: [AuthService],
   exports: [AuthService],
})
export class AuthSharedModule {}
