import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PlayerModel } from '@db/models/player.model';

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<PlayerModel> {
    const player = this.authService.validatePlayer(username, password);

    if (!player) {
      throw new UnauthorizedException();
    }

    return player;
  }
}
