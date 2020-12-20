import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Cities } from './cities.entity'

@Entity({ name: 'pollingplaces' })
export class Places {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('int')
    PLACE: number

    @Column('varchar')
    ADDRESS: string

    @OneToOne(() => Cities, cities => cities.CD_MUNICIPIO)
    ID_COD_MUNICIPIO
}