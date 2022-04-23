import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginPlayerCommand } from '@cqrs/commands/player/login-player/login-player.command';
import { NotImplementedException } from '@nestjs/common';

@CommandHandler(LoginPlayerCommand)
export class LoginPlayerHandler implements ICommandHandler<LoginPlayerCommand> {
  async execute(_command: LoginPlayerCommand) {
    throw new NotImplementedException();
  }
}
