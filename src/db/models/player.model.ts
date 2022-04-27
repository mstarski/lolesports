import { Column, Entity } from 'typeorm';
import { BaseDbModel } from '@db/models/base-db-model';

@Entity('player')
export class PlayerModel extends BaseDbModel {
  @Column({ unique: true })
  name: string;

  @Column()
  passwordHash: string;

  @Column({ default: 100, type: 'numeric' })
  coinBalance: number;
}
