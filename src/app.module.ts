import { Logger, Module } from '@nestjs/common';
import { RestApiModule } from '@rest-api/rest-api.module';

@Module({
  imports: [RestApiModule],
  providers: [Logger],
})
export class AppModule {}
