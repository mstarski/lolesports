import { LoginPlayerDto } from '@dtos/player.dto';

export class LoginPlayerCommand {
  constructor(public readonly dto: LoginPlayerDto) {}
}
