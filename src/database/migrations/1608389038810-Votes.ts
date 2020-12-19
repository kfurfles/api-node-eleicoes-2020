import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

/*
{
    "DT_GERACAO": "01/08/2020",
    "HH_GERACAO": "09:34:32",
    "ANO_ELEICAO": "2020",
    "SG_UF": "SP",
    "CD_MUNICIPIO": "71072",
    "NM_MUNICIPIO": "S�O_PAULO",
    "CD_MUN_SIT_BIOMETRIA": "0",
    "DS_MUN_SIT_BIOMETRIA": "Sem_biometria",
    "NR_ZONA": "1",
    "NR_SECAO": "5",
    "CD_LOCAL_VOTACAO": "38094",
    "CD_GENERO": "2",
    "DS_GENERO": "MASCULINO",
    "CD_ESTADO_CIVIL": "1",
    "DS_ESTADO_CIVIL": "SOLTEIRO",
    "CD_FAIXA_ETARIA": "5054",
    "DS_FAIXA_ETARIA": "50_a_54_anos",
    "CD_GRAU_ESCOLARIDADE": "5",
    "DS_GRAU_ESCOLARIDADE": "ENSINO_M�DIO_INCOMPLETO",
    "QT_ELEITORES_PERFIL": "3",
    "QT_ELEITORES_BIOMETRIA": "0",
    "QT_ELEITORES_DEFICIENCIA": "0",
    "QT_ELEITORES_INC_NM_SOCIAL": "0"
}
*/

export class Votes1608389038810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'votes',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'DT_GERACAO',
                        type: 'varchar(255)',
                        isNullable: false,
                    },
                    {
                        name: 'HH_GERACAO',
                        type: 'varchar(255)',
                        isNullable: false,
                    },
                    {
                        name: 'ANO_ELEICAO',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'SG_UF',
                        type: 'varchar(255)',
                        isNullable: false,
                    },
                    {
                        name: 'CD_MUNICIPIO',
                        type: 'varchar(255)'
                    },
                    {
                        name: 'CD_MUN_SIT_BIOMETRIA',
                        type: 'int'
                    },
                    {
                        name: 'DS_MUN_SIT_BIOMETRIA',
                        type: 'varchar(255)'
                    },
                    {
                        name: 'NR_ZONA',
                        type: 'int'
                    },
                    {
                        name: 'NR_SECAO',
                        type: 'int'
                    },
                    {
                        name: 'CD_LOCAL_VOTACAO',
                        type: 'varchar(255)'
                    },
                    {
                        name: 'CD_GENERO',
                        type: 'int'
                    },
                    {
                        name: 'DS_GENERO',
                        type: 'varchar(255)'
                    },
                    {
                        name: 'CD_ESTADO_CIVIL',
                        type: 'int'
                    },
                    {
                        name: 'DS_ESTADO_CIVIL',
                        type: 'varchar(255)'
                    },
                    {
                        name: 'CD_FAIXA_ETARIA',
                        type: 'int'
                    },
                    {
                        name: 'DS_FAIXA_ETARIA',
                        type: 'varchar(255)'
                    },
                    {
                        name: 'CD_GRAU_ESCOLARIDADE',
                        type: 'int'
                    },
                    {
                        name: 'DS_GRAU_ESCOLARIDADE',
                        type: 'varchar(255)'
                    },
                    {
                        name: 'QT_ELEITORES_PERFIL',
                        type: 'int'
                    },
                    {
                        name: 'QT_ELEITORES_BIOMETRIA',
                        type: 'int'
                    },
                    {
                        name: 'QT_ELEITORES_DEFICIENCIA',
                        type: 'int'
                    },
                    {
                        name: 'QT_ELEITORES_INC_NM_SOCIAL',
                        type: 'int'
                    }
                ]
            })
        )

        // await queryRunner.createForeignKey('votes', new TableForeignKey({
        //     columnNames: ['CD_MUNICIPIO'],
        //     referencedTableName: 'places',
        //     referencedColumnNames: ['CD_MUNICIPIO']
        // }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('votes')
        // const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("CD_MUNICIPIO") !== -1)
        // await queryRunner.dropForeignKey('votes',foreignKey)
        await queryRunner.dropTable('votes')
    }

}
