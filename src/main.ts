import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { SeedHelper } from './database/helper/tool-seeds/seed-helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

(async () => {
  // const folderSeed = 'places'  
  // const seed = new SeedHelper(folderSeed);
  
  // const list = seed.getFiles();
  // for await(const file of list){
  //   console.log(file)
  // }

})()