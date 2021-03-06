import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Cities } from './cities.entity'
import { PollingPlaces } from './polling-places.entity'

@Entity({ name: 'votes' })
export class Votes {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column() 
    DT_GERACAO: string

    @Column() 
    HH_GERACAO: string

    @Column() 
    ANO_ELEICAO: number

    @Column() 
    SG_UF: string

    @Column() 
    CD_MUN_SIT_BIOMETRIA: number

    @Column() 
    DS_MUN_SIT_BIOMETRIA: string

    @OneToOne(() => PollingPlaces, pollingPlaces => pollingPlaces.id)
    @JoinColumn()
    ID_COD_POLLING_PLACE: string

    @Column() 
    CD_LOCAL_VOTACAO: string

    @Column() 
    CD_GENERO: number

    @Column() 
    DS_GENERO: string

    @Column() 
    CD_ESTADO_CIVIL: number

    @Column() 
    DS_ESTADO_CIVIL: string

    @Column() 
    CD_FAIXA_ETARIA: number

    @Column() 
    DS_FAIXA_ETARIA: string

    @Column() 
    CD_GRAU_ESCOLARIDADE: number

    @Column() 
    DS_GRAU_ESCOLARIDADE: string

    @Column() 
    QT_ELEITORES_PERFIL: number

    @Column() 
    QT_ELEITORES_BIOMETRIA: number

    @Column() 
    QT_ELEITORES_DEFICIENCIA: number

    @Column() 
    QT_ELEITORES_INC_NM_SOCIAL: number
}