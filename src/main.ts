import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
   const app = await NestFactory.create(AppModule)
   app.enableCors()
   app.useGlobalPipes(new ValidationPipe())

   await app.listen(5000)
}

try {
   bootstrap()
} catch (err) {
   console.log(err)
}
