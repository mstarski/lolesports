import { RegisterPlayerDto } from '@dtos/player.dto';

export class RegisterPlayerCommand {
  constructor(public readonly dto: RegisterPlayerDto) {}
}
