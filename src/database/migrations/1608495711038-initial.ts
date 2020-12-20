import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1608495711038 implements MigrationInterface {
    name = 'initial1608495711038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CD_MUNICIPIO" character varying NOT NULL, "NOME" character varying NOT NULL, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pollingplaces" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "PLACE" integer NOT NULL, "ADDRESS" character varying NOT NULL, "CODMUNICIPIOId" uuid, CONSTRAINT "REL_0e64e5969e79df04305c92c9e3" UNIQUE ("CODMUNICIPIOId"), CONSTRAINT "PK_a4c9277ccf35bd519a60d089c4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "votes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "DT_GERACAO" character varying NOT NULL, "HH_GERACAO" character varying NOT NULL, "ANO_ELEICAO" integer NOT NULL, "SG_UF" character varying NOT NULL, "CD_MUN_SIT_BIOMETRIA" integer NOT NULL, "DS_MUN_SIT_BIOMETRIA" character varying NOT NULL, "NR_ZONA" integer NOT NULL, "NR_SECAO" integer NOT NULL, "CD_LOCAL_VOTACAO" character varying NOT NULL, "CD_GENERO" integer NOT NULL, "DS_GENERO" character varying NOT NULL, "CD_ESTADO_CIVIL" integer NOT NULL, "DS_ESTADO_CIVIL" character varying NOT NULL, "CD_FAIXA_ETARIA" integer NOT NULL, "DS_FAIXA_ETARIA" character varying NOT NULL, "CD_GRAU_ESCOLARIDADE" integer NOT NULL, "DS_GRAU_ESCOLARIDADE" character varying NOT NULL, "QT_ELEITORES_PERFIL" integer NOT NULL, "QT_ELEITORES_BIOMETRIA" integer NOT NULL, "QT_ELEITORES_DEFICIENCIA" integer NOT NULL, "QT_ELEITORES_INC_NM_SOCIAL" integer NOT NULL, "iDCODPOLLINGPLACEId" uuid, CONSTRAINT "REL_50af79df5023bc5f52166e8dda" UNIQUE ("iDCODPOLLINGPLACEId"), CONSTRAINT "PK_f3d9fd4a0af865152c3f59db8ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pollingplaces" ADD CONSTRAINT "FK_0e64e5969e79df04305c92c9e32" FOREIGN KEY ("CODMUNICIPIOId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "votes" ADD CONSTRAINT "FK_50af79df5023bc5f52166e8ddae" FOREIGN KEY ("iDCODPOLLINGPLACEId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "votes" DROP CONSTRAINT "FK_50af79df5023bc5f52166e8ddae"`);
        await queryRunner.query(`ALTER TABLE "pollingplaces" DROP CONSTRAINT "FK_0e64e5969e79df04305c92c9e32"`);
        await queryRunner.query(`DROP TABLE "votes"`);
        await queryRunner.query(`DROP TABLE "pollingplaces"`);
        await queryRunner.query(`DROP TABLE "cities"`);
    }

}
