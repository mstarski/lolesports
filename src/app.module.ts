import { Module } from '@nestjs/common';
import { RestApiModule } from '@rest-api/rest-api.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@db/database.module';
import configuration from '@config/configuration';

@Module({
  imports: [
    RestApiModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    DatabaseModule,
  ],
})
export class AppModule {}
