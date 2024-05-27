import { QueryArgsType } from '@ptc-org/nestjs-query-graphql';
import { ArgsType } from '@nestjs/graphql';
import { Order } from './entities/order.entity';

@ArgsType()
export class OrderQuery extends QueryArgsType(Order) {}
export const OrderConnection = OrderQuery.ConnectionType;