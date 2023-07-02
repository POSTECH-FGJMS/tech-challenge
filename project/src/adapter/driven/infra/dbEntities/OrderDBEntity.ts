import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { ALL_STATUS, Status } from '../../../../core/domain/valueObjects/Status'
import { ItemDBEntity } from './ItemDBEntity'
import { ClientDBEntity } from './ClientDBEntity'
import { ID } from '../../../../core/domain/valueObjects/ID'

@Entity({ name: 'orders' })
export class OrderDBEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: ID

    @Column({
        type: 'enum',
        enum: ALL_STATUS,
        default: 'Recebido',
    })
    status: Status

    @ManyToMany(() => ItemDBEntity)
    @JoinTable()
    items: ItemDBEntity[]

    @ManyToOne(() => ClientDBEntity)
    @JoinColumn()
    client: ClientDBEntity

    @CreateDateColumn()
    createdAt: Date
}
