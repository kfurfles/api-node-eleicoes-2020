import {MigrationInterface, QueryRunner} from "typeorm";
import { SeedHelper } from "../helper/tool-seeds/seed-helper";
import { IVoteSeed } from "../interfaces/vote-seed.interface";

export class SeedVotes1608560208659 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {        
        const folderSeed = 'votes'  
        const seed = new SeedHelper(folderSeed, false);

        for await(const file of  seed.getFiles<string>()){
            const queryString = ({
                DT_GERACAO,
                HH_GERACAO,
                ANO_ELEICAO,
                SG_UF,
                CD_MUN_SIT_BIOMETRIA,
                DS_MUN_SIT_BIOMETRIA,
                NR_ZONA,
                NR_SECAO,
                CD_LOCAL_VOTACAO,
                CD_GENERO,
                DS_GENERO,
                CD_ESTADO_CIVIL,
                DS_ESTADO_CIVIL,
                CD_FAIXA_ETARIA,
                DS_FAIXA_ETARIA,
                CD_GRAU_ESCOLARIDADE,
                DS_GRAU_ESCOLARIDADE,
                QT_ELEITORES_PERFIL,
                QT_ELEITORES_BIOMETRIA,
                QT_ELEITORES_DEFICIENCIA,
                QT_ELEITORES_INC_NM_SOCIAL
            }) => `
                INSERT INTO "votes" (
                    "id",
                    "DT_GERACAO",
                    "HH_GERACAO",
                    "ANO_ELEICAO",
                    "SG_UF",
                    "CD_MUN_SIT_BIOMETRIA",
                    "DS_MUN_SIT_BIOMETRIA",
                    "POLLING_PLACING_ID",
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
                    '${DT_GERACAO}',
                    '${HH_GERACAO}',
                    '${ANO_ELEICAO}',
                    '${SG_UF}',
                    '${CD_MUN_SIT_BIOMETRIA}',
                    '${DS_MUN_SIT_BIOMETRIA}',
                    (SELECT id FROM pollingplaces WHERE "NR_ZONA" = '${NR_ZONA}' and "NR_SECAO" = '${NR_SECAO}'),
                    '${CD_LOCAL_VOTACAO}',
                    '${CD_GENERO}',
                    '${DS_GENERO}',
                    '${CD_ESTADO_CIVIL}',
                    '${DS_ESTADO_CIVIL}',
                    '${CD_FAIXA_ETARIA}',
                    '${DS_FAIXA_ETARIA}',
                    '${CD_GRAU_ESCOLARIDADE}',
                    '${DS_GRAU_ESCOLARIDADE}',
                    '${QT_ELEITORES_PERFIL}',
                    '${QT_ELEITORES_BIOMETRIA}',
                    '${QT_ELEITORES_DEFICIENCIA}',
                    '${QT_ELEITORES_INC_NM_SOCIAL}'
                )
            `

            const list: IVoteSeed[] = JSON.parse(file)[0]
            for(const vote of list){
                await queryRunner.query(queryString({ ...vote }))
            }
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DELETE FROM "votes"')
    }

}
