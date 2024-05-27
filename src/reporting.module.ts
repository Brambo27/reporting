import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { OrderModule } from './order.module';
import { Order } from './entities/order.entity';
import { dataSourceOptionsReporting } from './database/typeorm_reporting';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      ...dataSourceOptionsReporting,
      entities: [Order],
      synchronize: false,
      logging: true,
    }),
    OrderModule]
})
export class ReportingModule {}