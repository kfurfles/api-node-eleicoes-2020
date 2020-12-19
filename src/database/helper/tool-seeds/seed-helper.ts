import { join } from 'path';
import { readdirSync, readFile as readFileCb } from 'fs';
import { promisify } from 'util'
import { SEEDS as SEEDS_FOLDER } from 'src/constants/path';
import { text } from 'express';
const readFile = promisify(readFileCb)

export class SeedHelper{
    private readonly BASE_DIR;
    private readonly SEED_DIR;
    private readonly folderName: string;
    
    constructor(folderName){
        this.BASE_DIR = SEEDS_FOLDER;
        this.folderName = folderName;
        this.SEED_DIR = join(this.BASE_DIR,this.folderName);
    }

    private sanitazeObj(obj){
        return Object.entries(obj)
        .reduce((acc,[key,value]) => {
            return { 
                ...acc, 
                [key]: (value as string).replace(/\'/ig,"`") 
            }
         },{})
    }

    private getDirFileNames(): string[] {
        return readdirSync(this.SEED_DIR)
    }

    private async readFile(filePath){
        const textFile = await readFile(filePath, { encoding: 'utf8' })
        const file = this.sanitazeObj(JSON.parse(textFile || '{}'))
        return file
    }

    async* getFiles<T>(){
        const list = this.getDirFileNames();
        let i;
        for await(const file of list){
            if(i > 5) break
        
            const filePath = join(this.SEED_DIR,file)
            const fileSeed = await this.readFile(filePath) as T
            
            yield fileSeed
            i++;
        }
    }
}
