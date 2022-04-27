import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetPlayerQuery } from '@cqrs/queries/get-player/get-player.query';
import * as bcrypt from 'bcrypt';
import { PlayerModel } from '@db/models/player.model';

@Injectable()
export class AuthService {
  constructor(private readonly queryBus: QueryBus) {}

  async validatePlayer(
    username: string,
    password: string,
  ): Promise<PlayerModel> {
    const player = await this.queryBus.execute(
      new GetPlayerQuery({ name: username }),
    );

    if (!player) {
      return null;
    }

    const isUsernameMatching = player.username === username;
    const isPasswordMatching = await bcrypt.compare(
      password,
      player.passwordHash,
    );

    return isUsernameMatching && isPasswordMatching ? player : null;
  }
}
