import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createConnection } from 'typeorm';
import { DbConnection } from '@db/index';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DbConnection,
      useFactory: async (configService: ConfigService) =>
        createConnection({
          type: configService.get('db.postgres.type'),
          host: configService.get('db.postgres.host'),
          port: configService.get('db.postgres.port'),
          username: configService.get('db.postgres.username'),
          password: configService.get('db.postgres.password'),
          database: configService.get('db.postgres.database'),

          synchronize: true,
          entities: [__dirname + '/../**/*.model{.ts,.js}'],
        }),
      inject: [ConfigService],
    },
  ],

  exports: [DbConnection],
})
export class DatabaseModule {}
