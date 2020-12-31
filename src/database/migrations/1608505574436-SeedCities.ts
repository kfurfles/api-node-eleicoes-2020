import { MigrationInterface, QueryRunner } from "typeorm";
import { SeedHelper } from "../helper/tool-seeds/seed-helper";
import { ICitySeed } from "../interfaces/city-seed.interface";

export class SeedCities1608505574436 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {        
        const folderSeed = 'cities'  
        const seed = new SeedHelper(folderSeed);

        for await(const file of seed.getFiles<ICitySeed>()){
            const { 
                CD_MUNICIPIO,
                NM_MUNICIPIO
            } = file

            const queryString = `
            INSERT INTO "cities" (
                "id",
                "CD_MUNICIPIO", 
                "NOME"
            )
            VALUES (
                DEFAULT,
                ${CD_MUNICIPIO}, 
                '${NM_MUNICIPIO}'
            )`

            await queryRunner.query(queryString);
        }
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DELETE FROM cities`)
    }

}
