import { sql } from 'drizzle-orm';
import { relations } from 'drizzle-orm';
import { authenticatedRole } from 'drizzle-orm/supabase';
import { text, timestamp, pgTable, pgPolicy } from 'drizzle-orm/pg-core';

// export const publicSchema = pgSchema('fafo_labs_auth');

export const customers = pgTable(
  'customers',
  {
    customerId: text('customer_id').primaryKey(),
    email: text('email').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  () => [
    pgPolicy('Enable read access for authenticated users to customers', {
      for: 'select',
      to: authenticatedRole,
      using: sql`true`,
      as: 'permissive',
    }),
  ],
);

export const subscriptions = pgTable(
  'subscriptions',
  {
    subscriptionId: text('subscription_id').primaryKey().notNull(),
    subscriptionStatus: text('subscription_status').notNull(),
    priceId: text('price_id'),
    productId: text('product_id'),
    scheduledChange: text('scheduled_change'),
    customerId: text('customer_id')
      .notNull()
      .references(() => customers.customerId),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  () => [
    pgPolicy('Enable read access for authenticated users to subscriptions', {
      for: 'select',
      to: authenticatedRole,
      using: sql`true`,
      as: 'permissive',
    }),
  ],
);

// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
// =+=+=+=+=+=+=+=+=+=+ RELATIONS +=+=+=+=+=+=+=+=+
// =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  customer: one(customers, {
    fields: [subscriptions.customerId],
    references: [customers.customerId],
  }),
}));

export const customersRelations = relations(customers, ({ many }) => ({
  subscriptions: many(subscriptions),
}));
