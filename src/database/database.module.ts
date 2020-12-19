import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import data from '../ormconfig'
console.log({ data })

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...data as TypeOrmModuleOptions,
            synchronize: true,
        })
    ]
})
export class DatabaseModule {}
