import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { ModelEntityFactory } from './model-entity.factory';

export abstract class EntityRepository<DbModel, Entity> {
  protected constructor(
    private readonly dbRepo: Repository<DbModel>,
    private readonly entitySchemaFactory: ModelEntityFactory<DbModel, Entity>,
  ) {}

  async find(options: FindManyOptions<DbModel>): Promise<Entity> {
    const model = await this.dbRepo.findOneOrFail(options);
    return this.entitySchemaFactory.toEntity(model);
  }

  async findOne(options: FindOneOptions<DbModel>): Promise<Entity[]> {
    const models = await this.dbRepo.find(options);
    return models.map(this.entitySchemaFactory.toEntity);
  }
}
