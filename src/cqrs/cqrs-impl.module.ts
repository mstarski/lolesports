import { LoginPlayerHandler } from '@cqrs/commands/player/login-player/login-player.handler';
import { RegisterPlayerHandler } from '@cqrs/commands/player/register-player/register-player.handler';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

export const CommandHandlers = [RegisterPlayerHandler, LoginPlayerHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers],
  exports: [CqrsModule],
})
export class CqrsImplModule {}
