import {MigrationInterface, QueryRunner} from "typeorm";

export class Places1608306443863 implements MigrationInterface {
    name = 'Places1608306443863'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "places" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CD_MUNICIPIO" character varying NOT NULL, "NM_MUNICIPIO" character varying NOT NULL, "NR_ZONA" integer NOT NULL, "NR_SECAO" integer NOT NULL, "PLACE" character varying NOT NULL, "ADDRESS" character varying NOT NULL, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "places"`);
    }

}
