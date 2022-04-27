import { IQuery } from '@nestjs/cqrs';
import { PlayerModel } from '@db/models/player.model';
import { FindOptionsWhere } from 'typeorm';

export class GetPlayerQuery implements IQuery {
  constructor(public readonly params: FindOptionsWhere<PlayerModel>) {}
}
