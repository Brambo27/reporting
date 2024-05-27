import { Inject, Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { QueryService, InjectQueryService} from '@ptc-org/nestjs-query-core';

@Injectable()
export class AppService {
  constructor(
    @InjectQueryService(Order) 
    readonly orderService: QueryService<Order>,
  ) {}

  test(): void {
    this.orderService.query({}).then((orders) => console.log(orders));
    this.orderService.count({}).then((count) => console.log(count));
  }
}