import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterPlayerCommand } from '@cqrs/commands/player/register-player/register-player.command';
import { NotImplementedException } from '@nestjs/common';

@CommandHandler(RegisterPlayerCommand)
export class RegisterPlayerHandler
  implements ICommandHandler<RegisterPlayerCommand>
{
  async execute(_command: RegisterPlayerCommand) {
    throw new NotImplementedException();
  }
}
