import {MigrationInterface, QueryRunner} from "typeorm";
import { SeedHelper } from "../helper/tool-seeds/seed-helper";
import { IPollingPlaces } from "../interfaces/polling-places-seed.interface";
/*
INSERT INTO "pollingplaces" (
 "id",
 "PLACE", 
 "ADDRESS",
  "CODMUNICIPIOId"
)
VALUES (
 DEFAULT,
 'COLÉGIO OBJETIVO', 
 'AV. PAULISTA, 900',
 (
  SELECT "id" FROM "cities" WHERE "CD_MUNICIPIO" = '62812'
 )
)
*/

export class SeedPollingPlaces1608560186610 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {        
        const folderSeed = 'pollingPlaces'  
        const seed = new SeedHelper(folderSeed);

        for await(const file of seed.getFiles<IPollingPlaces>()){
            const { 
                PLACE,                
                ADDRESS,
                CD_MUNICIPIO,
                NR_SECAO,
                NR_ZONA
            } = file

            const queryString = `
            INSERT INTO "pollingplaces" (
                "id",
                "PLACE", 
                "ADDRESS",
                "NR_SECAO",
                "NR_ZONA",
                "COD_MUNICIPIO_ID"
            )
            VALUES (
                DEFAULT,
                '${PLACE}', 
                '${ADDRESS}',
                '${NR_SECAO}',
                '${NR_ZONA}',
                (
                    SELECT "id" 
                    FROM "cities" 
                    WHERE "CD_MUNICIPIO" = '${parseInt(CD_MUNICIPIO)}'
                )
            ) 
            ON CONFLICT DO NOTHING
            `

            await queryRunner.query(queryString);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DELETE FROM pollingplaces`)
    }

}
