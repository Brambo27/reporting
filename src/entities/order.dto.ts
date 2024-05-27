import 'reflect-metadata'
import { ObjectType, Field, ID, Int } from '@nestjs/graphql'
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql'

@ObjectType()
export class OrderDTO {
  @IDField(() => ID)
  uuid: string;

  @FilterableField()
  currency: string;

  @FilterableField()
  note: string;

  @FilterableField()
  incoterms: string;

  @FilterableField()
  specialDetails: string;

  @FilterableField()
  packingInstructions: string;

  @FilterableField()
  specialInstructions: string;

  @FilterableField()
  reference: string;

  @FilterableField()
  sourceIdentifier: string;

  @FilterableField()
  sourceName: string;

  @FilterableField()
  sourceUrl: string;

  @FilterableField()
  subtotalPrice: number;

  @FilterableField()
  status: string;

  @FilterableField()
  taxLines: string;

  @FilterableField()
  totalDiscounts: number;

  @FilterableField()
  totalOrderLinesPrice: number;

  @FilterableField()
  shippingPrice: number;

  @FilterableField()
  totalPrice: number;

  @FilterableField()
  totalTax: number;

  @FilterableField()
  billingAddress: string;

  @FilterableField()
  shippingAddress: string;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  updatedAt: Date;

  @FilterableField()
  shippingPreference: string;
}