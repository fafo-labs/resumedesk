export interface Tier {
  name: string;
  id: 'starter' | 'pro' | 'advanced';
  icon: string;
  description: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
}

export const PricingTier: Tier[] = [
  // {
  //   name: 'Starter',
  //   id: 'starter',
  //   icon: '/assets/icons/price-tiers/free-icon.svg',
  //   description: 'Ideal for individuals who want to get started with simple design tasks.',
  //   features: ['1 workspace', 'Limited collaboration', 'Export to PNG and SVG'],
  //   featured: false,
  //   priceId: { month: 'pri_01jj18dzdmkpzzzap6zt140hn5', year: 'pri_01jj18efxcannxgqyx6vm0ev0h' },
  // },
  {
    name: 'Pro',
    id: 'pro',
    icon: '/assets/icons/price-tiers/basic-icon.svg',
    description: 'Enhanced design tools for scaling teams who need more flexibility.',
    features: ['Downloads', 'Intuitive editor', 'Professional Format'],
    featured: true,
    priceId: { month: 'pri_01jjtv312kc25vpq2e27dspemg', year: 'pri_01jjtv312kc25vpq2e27dspemg', oneTime: 'pri_01jjtv312kc25vpq2e27dspemg' },
  },
  // {
  //   name: 'Advanced',
  //   id: 'advanced',
  //   icon: '/assets/icons/price-tiers/pro-icon.svg',
  //   description: 'Powerful tools designed for extensive collaboration and customization.',
  //   features: [
  //     'Single sign on (SSO)',
  //     'Advanced version control',
  //     'Assets library',
  //     'Guest accounts',
  //     'Everything in Pro',
  //   ],
  //   featured: false,
  //   priceId: { month: 'pri_01jj18m1jqdrrmgde56qyjrf1b', year: 'pri_01jj18n9zh49pbeyneh9nw4c0c' },
  // },
];
