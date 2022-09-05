import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { ReniecModule } from './reniec.module';

async function bootstrap() {
  const app = await NestFactory.create(ReniecModule);
  const config = new DocumentBuilder()
    .setTitle('Reniec connector')
    .setDescription('The reniec-connector API')
    .setVersion('1.0')
    .addTag('reniec')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  await app.listen(3000);
}
bootstrap();
