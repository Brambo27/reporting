import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Order } from './entities/order.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Order])],
      resolvers: [
        {
          EntityClass: Order,
          DTOClass: Order,
          enableAggregate: true,
        },
      ],
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class OrderModule {}