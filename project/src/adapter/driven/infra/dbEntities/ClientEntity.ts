import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { ID } from '../../../../core/domain/valueObjects/ID'

@Entity({ name: 'clients' })
export class ClientEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: ID

    @Column({ nullable: true })
    name?: string

    @Column({ nullable: true })
    email?: string

    @Column({ nullable: true })
    cpf?: string
}
