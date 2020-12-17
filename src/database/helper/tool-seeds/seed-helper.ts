import { join } from 'path';
import { readdirSync, readFile as readFileCb } from 'fs';
import { promisify } from 'util'
import { SEEDS as SEEDS_FOLDER } from 'src/constants/path';
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

    private getDirFileNames(): string[] {
        return readdirSync(this.SEED_DIR)
    }

    private async readFile(filePath){
        const file =  JSON.parse(await readFile(filePath, { encoding: 'utf8' }) || '{}')
        
        return file
    }

    async* getFiles(){
        const list = this.getDirFileNames();
        let i;
        for await(const file of list){
            if(i > 5) break
        
            const filePath = join(this.SEED_DIR,file)
            const fileSeed = await this.readFile(filePath)
            
            yield fileSeed
            i++;
        }
    }
}
