import { Order } from "./entities/order.entity";
import { ConnectionType } from '@ptc-org/nestjs-query-graphql';
import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';
import { ReadResolver } from '@ptc-org/nestjs-query-graphql';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { OrderConnection, OrderQuery } from "./types";

@Resolver(() => Order)
export class OrderResolver extends ReadResolver(Order) {
  constructor(
    @InjectQueryService(Order) readonly service: QueryService<Order>
  ) {
    super(service);
  }

    @Query(() => OrderConnection)
    async orders_new(@Args() query: OrderQuery): Promise<ConnectionType<Order>> {
      return OrderConnection.createFromPromise((q) => this.service.query(q), query);
    }
}