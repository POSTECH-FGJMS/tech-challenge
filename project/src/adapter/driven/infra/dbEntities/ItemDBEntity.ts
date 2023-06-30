import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { Category } from '../../../../core/domain/valueObjects/Category'
import { ID } from '../../../../core/domain/valueObjects/ID'

@Entity({ name: 'items' })
export class ItemDBEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: ID

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: string

    @Column({
        type: 'enum',
        enum: ['Lanche', 'Acompanhamento', 'Bebida', 'Sobremesa'],
    })
    category: Category
}
