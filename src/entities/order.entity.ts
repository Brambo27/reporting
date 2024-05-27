import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, ID } from '@nestjs/graphql';
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType('Order')
@Entity('orders')
export class Order {
  @IDField(() => ID)
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ name: 'client_uuid', type: 'varchar' })
  clientUuid: string;

  @Column({ type: 'varchar' })
  currency: string;

  @Column({ type: 'varchar' })
  note: string;

  @Column({ type: 'varchar' })
  incoterms: string;

  @Column({ name: 'special_details', type: 'varchar' })
  specialDetails: string;

  @Column({ name: 'packing_instructions', type: 'varchar' })
  packingInstructions: string;

  @Column({ name: 'special_instructions', type: 'varchar' })
  specialInstructions: string;

  @Column({ type: 'varchar' })
  reference: string;

  @Column({ name: 'source_identifier', type: 'varchar' })
  sourceIdentifier: string;

  @Column({ name: 'source_name', type: 'varchar' })
  sourceName: string;

  @Column({ name: 'source_url', type: 'varchar' })
  sourceUrl: string;

  @Column({ name: 'subtotal_price', type: 'double precision' })
  subtotalPrice: number;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ name: 'tax_lines', type: 'varchar', length: 65535 })
  taxLines: string;

  @Column({ name: 'total_discounts', type: 'double precision' })
  totalDiscounts: number;

  @Column({ name: 'total_order_lines_price', type: 'double precision' })
  totalOrderLinesPrice: number;

  @Column({ name: 'shipping_price', type: 'double precision' })
  shippingPrice: number;

  @Column({ name: 'total_price', type: 'double precision' })
  totalPrice: number;

  @Column({ name: 'total_tax', type: 'double precision' })
  totalTax: number;

  @Column({ name: 'billing_address', type: 'varchar', length: 65535 })
  billingAddress: string;

  @Column({ name: 'shipping_address', type: 'varchar', length: 65535 })
  shippingAddress: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ name: 'shipping_preference', type: 'varchar' })
  shippingPreference: string;
}
