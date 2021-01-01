import {MigrationInterface, QueryRunner} from "typeorm";

export class ForeignKeyPollingPlacesTable1608505303684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "pollingplaces" 
            ADD CONSTRAINT "FK_0e64e5969e79df04305c92c9e32" 
            FOREIGN KEY ("COD_MUNICIPIO_ID") 
            REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "pollingplaces" 
            DROP CONSTRAINT "FK_0e64e5969e79df04305c92c9e32"
        `);
    }

}
