import { RegisterPlayerDto } from '@dtos/player.dto';
import { ICommand } from '@nestjs/cqrs';

export class RegisterPlayerCommand implements ICommand {
  constructor(public readonly dto: RegisterPlayerDto) {}
}
