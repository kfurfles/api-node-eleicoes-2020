import {MigrationInterface, QueryRunner} from "typeorm";

export class ForeignKeyVotesTable1608505247319 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "votes" ADD CONSTRAINT "FK_50af79df5023bc5f52166e8ddae" 
            FOREIGN KEY ("POLLING_PLACING_ID") 
            REFERENCES "pollingplaces"("id") 
            ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "votes" 
            DROP CONSTRAINT "FK_50af79df5023bc5f52166e8ddae"
        `);
    }

}
