import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPlayerQuery } from '@cqrs/queries/get-player/get-player.query';
import { NotImplementedException } from '@nestjs/common';
import { PlayerModel } from '@db/models/player.model';

@QueryHandler(GetPlayerQuery)
export class GetPlayerHandler implements IQueryHandler<GetPlayerQuery> {
  execute(_query: GetPlayerQuery): Promise<PlayerModel> {
    throw new NotImplementedException();
  }
}
