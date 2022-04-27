import { Module } from '@nestjs/common';
import { AuthController } from '@rest-api/auth.controller';
import { CqrsImplModule } from '@cqrs/cqrs-impl.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [CqrsImplModule, AuthModule],
  controllers: [AuthController],
})
export class RestApiModule {}
