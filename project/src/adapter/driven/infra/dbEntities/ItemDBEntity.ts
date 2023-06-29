import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

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

    @Column()
    category: string

    @Column()
    orderId: string
}
