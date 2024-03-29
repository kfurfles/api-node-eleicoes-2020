import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import fs from 'fs'
import { promisify } from 'util';
import { AppModule } from './app.module';
import { SeedHelper } from './database/helper/tool-seeds/seed-helper';
import { IVoteSeed } from './database/interfaces/vote-seed.interface';

const writeFile = promisify(fs.writeFile);

(async () => {
    const folderSeed = 'votes';  
    const seed = new SeedHelper(folderSeed, false,'C:/Users/Altran/projects/personal/api-node-eleicoes-2020/src/assets/seeds');
    let fileText = [];
    let index = 0;
    let filePerFile = 0;
    const maxLinePerFile = 2000;
    const insertQuery = `INSERT INTO "votes" (\n\t"id",\n\t"DT_GERACAO",\n\t"HH_GERACAO",\n\t"ANO_ELEICAO",\n\t"SG_UF",\n\t"CD_MUN_SIT_BIOMETRIA",\n\t"DS_MUN_SIT_BIOMETRIA",\n\t"POLLING_PLACING_ID",\n\t"CD_LOCAL_VOTACAO",\n\t"CD_GENERO",\n\t"DS_GENERO",\n\t"CD_ESTADO_CIVIL",\n\t"DS_ESTADO_CIVIL",\n\t"CD_FAIXA_ETARIA",\n\t"DS_FAIXA_ETARIA",\n\t"CD_GRAU_ESCOLARIDADE",\n\t"DS_GRAU_ESCOLARIDADE",\n\t"QT_ELEITORES_PERFIL",\n\t"QT_ELEITORES_BIOMETRIA",\n\t"QT_ELEITORES_DEFICIENCIA",\n\t"QT_ELEITORES_INC_NM_SOCIAL") \nVALUES`


    for await(const file of  seed.getFiles<string>()){
        fileText = [];
        const queryString = ({
            DT_GERACAO,
            HH_GERACAO,
            ANO_ELEICAO,
            SG_UF,
            CD_MUN_SIT_BIOMETRIA,
            DS_MUN_SIT_BIOMETRIA,
            NR_ZONA,
            NR_SECAO,
            CD_LOCAL_VOTACAO,
            CD_GENERO,
            DS_GENERO,
            CD_ESTADO_CIVIL,
            DS_ESTADO_CIVIL,
            CD_FAIXA_ETARIA,
            DS_FAIXA_ETARIA,
            CD_GRAU_ESCOLARIDADE,
            DS_GRAU_ESCOLARIDADE,
            QT_ELEITORES_PERFIL,
            QT_ELEITORES_BIOMETRIA,
            QT_ELEITORES_DEFICIENCIA,
            QT_ELEITORES_INC_NM_SOCIAL
        }) => `(\n\tDEFAULT,\n\t'${DT_GERACAO}',\n\t'${HH_GERACAO}',\n\t'${ANO_ELEICAO}',\n\t'${SG_UF}',\n\t'${CD_MUN_SIT_BIOMETRIA}',\n\t'${DS_MUN_SIT_BIOMETRIA}',\n\t(SELECT id FROM pollingplaces WHERE "NR_ZONA" = '${NR_ZONA}' and "NR_SECAO" = '${NR_SECAO}'),\n\t'${CD_LOCAL_VOTACAO}',\n\t'${CD_GENERO}',\n\t'${DS_GENERO}',\n\t'${CD_ESTADO_CIVIL}',\n\t'${DS_ESTADO_CIVIL}',\n\t'${CD_FAIXA_ETARIA}',\n\t'${DS_FAIXA_ETARIA}',\n\t'${CD_GRAU_ESCOLARIDADE}',\n\t'${DS_GRAU_ESCOLARIDADE}',\n\t'${QT_ELEITORES_PERFIL}',\n\t'${QT_ELEITORES_BIOMETRIA}',\n\t'${QT_ELEITORES_DEFICIENCIA}',\n\t'${QT_ELEITORES_INC_NM_SOCIAL}')`

        const list: IVoteSeed[] = JSON.parse(file)[0]
        for(const vote of list){
          // if(filePerFile <= maxLinePerFile){
            // filePerFile++;
          // } else {
            const fullQuery = queryString({ ...vote })
            fileText.push(`${fullQuery}\n`)
            // }
        }
        const time = new Date().getTime()
        const finalQuery = `${insertQuery} ${fileText.join('\n,')}`
        const filePath = `C:/Users/Altran/projects/personal/api-node-eleicoes-2020/db-2/query-${time}.sql`
        await writeFile(filePath,finalQuery)
        console.log(`file created: db-2/query-${time}.sql`)
    }

})()