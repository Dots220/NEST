import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
   const app = await NestFactory.create(AppModule)
   app.enableCors()
   app.useGlobalPipes(new ValidationPipe())

   const options = new DocumentBuilder().addBearerAuth()

   const config = new DocumentBuilder()
      .setTitle('TodoList')
      .setDescription('The TodoList API description')
      .setVersion('1.0')
      .addTag('todo')
      .build()
   const document = SwaggerModule.createDocument(app, config)
   SwaggerModule.setup('api', app, document)

   await app.listen(5000)
}

try {
   bootstrap()
} catch (err) {
   console.log(err)
}
