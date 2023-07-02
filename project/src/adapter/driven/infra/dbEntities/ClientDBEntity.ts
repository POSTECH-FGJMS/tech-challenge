import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { ID } from '../../../../core/domain/valueObjects/ID'

@Entity({ name: 'clients' })
export class ClientDBEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: ID

    @Column({ nullable: true })
    name?: string

    @Column({ nullable: true, unique: true })
    email?: string

    @Column({ nullable: true, unique: true })
    cpf?: string
}
