import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Cities } from './cities.entity'

@Entity({ name: 'pollingplaces' })
export class PollingPlaces {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    PLACE: string

    @Column()
    ADDRESS: string

    @Column()
    NR_ZONA: string

    @Column()
    NR_SECAO: string

    @OneToOne(() => Cities, cities => cities.CD_MUNICIPIO)
    @JoinColumn()
    COD_MUNICIPIO_ID
}