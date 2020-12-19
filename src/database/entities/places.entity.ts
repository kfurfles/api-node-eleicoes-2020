import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Places {

    @PrimaryGeneratedColumn('uuid')
    @PrimaryColumn()
    id: string

    @Column('varchar')
    CD_MUNICIPIO: string
    
    @Column('varchar')
    NM_MUNICIPIO: string

    @Column('int')
    NR_ZONA: number

    @Column('int')
    NR_SECAO: number

    @Column('varchar')
    PLACE: string

    @Column('varchar')
    ADDRESS: string
}