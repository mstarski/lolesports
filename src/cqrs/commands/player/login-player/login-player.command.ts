import { LoginPlayerDto } from '@dtos/player.dto';
import { ICommand } from '@nestjs/cqrs';

export class LoginPlayerCommand implements ICommand {
  constructor(public readonly dto: LoginPlayerDto) {}
}
