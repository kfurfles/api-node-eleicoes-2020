import {MigrationInterface, QueryRunner, Table} from "typeorm";

/*
{
  "ID": "71072-SÃO PAULO-1-1",
  "CD_MUNICIPIO": "71072",
  "NM_MUNICIPIO": "SÃO PAULO",
  "NR_ZONA": "1",
  "NR_SECAO": "1",
  "PLACE": "COLÉGIO OBJETIVO",
  "ADDRESS": "AV. PAULISTA, 900"
}
*/

export class PlacesTable1608133806881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "Places",
              columns: [
                  {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: 'increment'                    
                  },
                  {
                    name: "CD_MUNICIPIO",
                    type: "varchar(255)",
                    isNullable: false
                  },
                  {
                    name: "NM_MUNICIPIO",
                    type: "int",
                    isNullable: false
                  },
                  {
                    name: "NR_ZONA",
                    type: "int",
                    isNullable: false
                  },
                  {
                    name: "NR_SECAO",
                    type: "int",
                    isNullable: false
                  },
                  {
                    name: "PLACE",
                    type: "varchar(255)",
                    isNullable: false
                  },
                  {
                    name: "ADDRESS",
                    type: "varchar(255)",
                    isNullable: false
                  }
              ]  
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Places")
    }

}
