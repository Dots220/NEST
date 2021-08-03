import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from '../modules/user/user.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
   imports: [
      UserModule,
      MongooseModule.forRoot(
         'mongodb+srv://Andrey:qweqweasdasd@cluster0.iab1f.mongodb.net/fullstack-app?retryWrites=true&w=majority',
      ),
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
