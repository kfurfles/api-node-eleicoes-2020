import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'cities' })
export class Cities {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    CD_MUNICIPIO: string

    @Column()
    NOME: string
}