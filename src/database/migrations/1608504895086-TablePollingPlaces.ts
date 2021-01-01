import {MigrationInterface, QueryRunner} from "typeorm";

export class TablePollingPlaces1608504895086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pollingplaces" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "PLACE" character varying NOT NULL, 
            "ADDRESS" character varying NOT NULL,
            "NR_ZONA" character varying NOT NULL,
            "NR_SECAO" character varying NOT NULL, 
            "COD_MUNICIPIO_ID" uuid, 
            CONSTRAINT "PK_a4c9277ccf35bd519a60d089c4a" PRIMARY KEY ("id")
        )`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pollingplaces"`);
    }

}
