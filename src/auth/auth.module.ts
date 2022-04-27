import { AuthService } from './auth.service';
import { CqrsImplModule } from '@cqrs/cqrs-impl.module';
import { Module } from '@nestjs/common';
import { LocalAuthGuard } from './local/local-auth.guard';
import { LocalAuthStrategy } from './local/local-auth.strategy';

const LocalAuth = [LocalAuthGuard, LocalAuthStrategy];
const JwtAuth = [];

@Module({
  imports: [CqrsImplModule],
  providers: [AuthService, ...LocalAuth, ...JwtAuth],
})
export class AuthModule {}
