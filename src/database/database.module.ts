import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as data from '../ormconfig.json'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...data as TypeOrmModuleOptions,
            synchronize: true,
        })
    ]
})
export class DatabaseModule {}
