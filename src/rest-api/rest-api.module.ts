import { Module } from '@nestjs/common';
import { AuthController } from '@rest-api/auth.controller';
import { CqrsImplModule } from '@cqrs/cqrs-impl.module';

@Module({
  imports: [CqrsImplModule],
  controllers: [AuthController],
})
export class RestApiModule {}
