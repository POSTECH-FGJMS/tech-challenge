import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity({ name: 'clients' })
export class ClientEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: true })
    name?: string

    @Column({ nullable: true })
    email?: string

    @Column({ nullable: true })
    cpf?: string
}
