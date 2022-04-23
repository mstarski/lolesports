export interface ModelEntityFactory<DbModelClass, EntityClass> {
  toEntity: (schema: DbModelClass) => EntityClass;
  toSchema: (entity: EntityClass) => DbModelClass;
}
