import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import helmet from 'helmet';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AllExceptionFilter } from './common/exception-filters/all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionFilter(configService));
  app.setGlobalPrefix('', { exclude: ['health'] });
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });
  app.enableCors();
  await app.listen(configService.get<string>('port'));
}
bootstrap();
