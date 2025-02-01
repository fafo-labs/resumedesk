export interface IBillingFrequency {
  value: string;
  label: string;
  priceSuffix: string;
}

export const BillingFrequency: IBillingFrequency[] = [
  { value: 'oneTime', label: 'One time', priceSuffix: 'One time payment' },
  { value: 'month', label: 'Monthly', priceSuffix: 'per user/month' },
  { value: 'year', label: 'Annual', priceSuffix: 'per user/year' },
];
