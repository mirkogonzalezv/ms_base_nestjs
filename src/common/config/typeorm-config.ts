import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const TypeOrmConfig = (entities: [any]) => {
  return TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('database.pg.host'),
      port: configService.get<number>('database.pg.port'),
      username: configService.get<string>('database.pg.username'),
      password: configService.get<string>('database.pg.password'),
      database: configService.get<string>('database.pg.database'),
      ssl: configService.get<boolean>('database.pg.ssl'),
      entitnes: entities,
      keepConnectionAlive: true,
      synchronize:
        configService.get<string>('environment') == 'development'
          ? true
          : false,
      autoLoadEntities: true,
      optiosn: { encrypt: true },
      logging: true,
    }),
    dataSourceFactory: async (options) => {
      return new DataSource(options).initialize();
    },
  });
};
