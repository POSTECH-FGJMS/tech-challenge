import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { Category } from '../../../../core/domain/valueObjects/Category'

@Entity({ name: 'items' })
export class ItemDBEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

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
