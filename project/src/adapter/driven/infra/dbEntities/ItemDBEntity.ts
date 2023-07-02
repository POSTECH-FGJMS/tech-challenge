import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import {
    ALL_CATEGORIES,
    Category,
} from '../../../../core/domain/valueObjects/Category'
import { ID } from '../../../../core/domain/valueObjects/ID'

@Entity({ name: 'items' })
export class ItemDBEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: ID

    @Column()
    name: string

    @Column()
    description: string

    @Column('decimal', { scale: 2 })
    price: number

    @Column({
        type: 'enum',
        enum: ALL_CATEGORIES,
    })
    category: Category
}
