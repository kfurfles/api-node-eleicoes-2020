import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { Places } from "../entities/places.entity";
import { SeedHelper } from "../helper/tool-seeds/seed-helper";

export class PlacesSeeds1608307822775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {        
        const folderSeed = 'places'  
        const seed = new SeedHelper(folderSeed);

        for await(const file of seed.getFiles<Places>()){
            const { 
                CD_MUNICIPIO,
                NM_MUNICIPIO,
                NR_ZONA,
                NR_SECAO,
                PLACE,
                ADDRESS
            } = file

            const queryString = `
            INSERT INTO "places" (
                "id",
                "CD_MUNICIPIO", 
                "NM_MUNICIPIO", 
                "NR_ZONA", 
                "NR_SECAO", 
                "PLACE", 
                "ADDRESS"
            )
            VALUES (
                DEFAULT,
                ${parseInt(CD_MUNICIPIO)}, 
                '${NM_MUNICIPIO}', 
                ${parseInt(NR_ZONA.toString())}, 
                ${parseInt(NR_SECAO.toString())}, 
                '${PLACE}', 
                '${ADDRESS}'
            )`

            await queryRunner.query(queryString);
        }


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
