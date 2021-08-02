import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

async function bootstrap() {
   const app = await NestFactory.create(AppModule)
   await app.listen(5000)
}

try {
   bootstrap()
} catch (err) {
   console.log(err)
}
