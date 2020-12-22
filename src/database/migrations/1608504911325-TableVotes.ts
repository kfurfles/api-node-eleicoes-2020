import {MigrationInterface, QueryRunner} from "typeorm";

export class TableVotes1608504911325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "votes" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "DT_GERACAO" character varying NOT NULL, 
            "HH_GERACAO" character varying NOT NULL, 
            "ANO_ELEICAO" integer NOT NULL, 
            "SG_UF" character varying NOT NULL, 
            "CD_MUN_SIT_BIOMETRIA" integer NOT NULL, 
            "DS_MUN_SIT_BIOMETRIA" character varying NOT NULL, 
            "POLLING_PLACING_ID" uuid NOT NULL,
            "CD_LOCAL_VOTACAO" character varying NOT NULL, 
            "CD_GENERO" integer NOT NULL, 
            "DS_GENERO" character varying NOT NULL, 
            "CD_ESTADO_CIVIL" integer NOT NULL, 
            "DS_ESTADO_CIVIL" character varying NOT NULL, 
            "CD_FAIXA_ETARIA" integer NOT NULL, 
            "DS_FAIXA_ETARIA" character varying NOT NULL, 
            "CD_GRAU_ESCOLARIDADE" integer NOT NULL, 
            "DS_GRAU_ESCOLARIDADE" character varying NOT NULL, 
            "QT_ELEITORES_PERFIL" integer NOT NULL, 
            "QT_ELEITORES_BIOMETRIA" integer NOT NULL, 
            "QT_ELEITORES_DEFICIENCIA" integer NOT NULL, 
            "QT_ELEITORES_INC_NM_SOCIAL" integer NOT NULL, 
            CONSTRAINT "PK_f3d9fd4a0af865152c3f59db8ff" PRIMARY KEY ("id")
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "votes"`);
    }

}
