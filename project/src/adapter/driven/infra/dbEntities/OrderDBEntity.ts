import {
    BaseEntity,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Status } from '../../../../core/domain/valueObjects/Status'
import { ItemDBEntity } from './ItemDBEntity'
import { ClientEntity } from './ClientEntity'
import { ID } from '../../../../core/domain/valueObjects/ID'

@Entity({ name: 'orders' })
export class OrderDBEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: ID

    @Column()
    name: string

    @Column()
    description: string

    @Column({
        type: 'enum',
        enum: ['Recebido', 'Em preparação', 'Pronto', 'Finalizado'],
        default: 'Recebido',
    })
    status: Status

    @ManyToMany(() => ItemDBEntity)
    @JoinTable()
    items: ItemDBEntity[]

    @OneToOne(() => ClientEntity)
    @JoinTable()
    client: ClientEntity
}
