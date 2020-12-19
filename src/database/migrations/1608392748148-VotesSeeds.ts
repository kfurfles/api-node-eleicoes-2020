import {MigrationInterface, QueryRunner} from "typeorm";

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

export class VotesSeeds1608392748148 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const queryString = `
        INSERT INTO "votes" (
            "id",
            "DT_GERACAO",
            "HH_GERACAO",
            "ANO_ELEICAO",
            "SG_UF",
            "CD_MUNICIPIO",
            "CD_MUN_SIT_BIOMETRIA",
            "DS_MUN_SIT_BIOMETRIA",
            "NR_ZONA",
            "NR_SECAO",
            "CD_LOCAL_VOTACAO",
            "CD_GENERO",
            "DS_GENERO",
            "CD_ESTADO_CIVIL",
            "DS_ESTADO_CIVIL",
            "CD_FAIXA_ETARIA",
            "DS_FAIXA_ETARIA",
            "CD_GRAU_ESCOLARIDADE",
            "DS_GRAU_ESCOLARIDADE",
            "QT_ELEITORES_PERFIL",
            "QT_ELEITORES_BIOMETRIA",
            "QT_ELEITORES_DEFICIENCIA",
            "QT_ELEITORES_INC_NM_SOCIAL"
        )
        VALUES (
            DEFAULT,
            '01/08/2020',
            '09:34:32',
            '2020',
            'SP',
            '71072',
            '0',
            'Sem_biometria',
            '1',
            '5',
            '38094',
            '2',
            'MASCULINO',
            '1',
            'SOLTEIRO',
            '5054',
            '50_a_54_anos',
            '5',
            'ENSINO_M�DIO_INCOMPLETO',
            '3',
            '0',
            '0',
            '0'
        )`

        await queryRunner.query(queryString)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "votes" where CD_GENERO = 0`)
    }

}
