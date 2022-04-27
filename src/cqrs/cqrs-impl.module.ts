import { LoginPlayerHandler } from '@cqrs/commands/player/login-player/login-player.handler';
import { RegisterPlayerHandler } from '@cqrs/commands/player/register-player/register-player.handler';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPlayerHandler } from '@cqrs/queries/get-player/get-player.handler';

export const CommandHandlers = [RegisterPlayerHandler, LoginPlayerHandler];
export const QueryHandlers = [GetPlayerHandler];

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...QueryHandlers],
  exports: [CqrsModule],
})
export class CqrsImplModule {}
