import {MigrationInterface, QueryRunner} from "typeorm";

export class TableCities1608504879769 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cities" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "CD_MUNICIPIO" character varying NOT NULL, 
            "NOME" character varying NOT NULL, 
            CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id")
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cities"`);
    }

}
