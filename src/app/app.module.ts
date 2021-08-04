import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from '../modules/user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../modules/user/user.entity'

@Module({
   imports: [
      UserModule,
      TypeOrmModule.forRoot({
         type: 'postgres',
         host: 'localhost',
         port: 3010,
         username: 'postgres',
         password: 'qQ12345!',
         entities: [User],
         synchronize: true,
      }),
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
