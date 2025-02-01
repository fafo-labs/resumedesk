'use client';

import { Album, CreditCard, Home, EditIcon } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useUserInfo } from '@/hooks/useUserInfo';
import ProBanner from '@/components/pro-banner/pro-banner';
import { useState } from 'react';

const sidebarItems = [
  {
    title: 'Editor',
    icon: <EditIcon className="h-6 w-6" />,
    href: '/editor',
  },
  {
    title: 'Dashboard',
    icon: <Home className="h-6 w-6" />,
    href: '/dashboard',
  },
  {
    title: 'Subscriptions',
    icon: <Album className="h-6 w-6" />,
    href: '/dashboard/subscriptions',
  },
  {
    title: 'Payments',
    icon: <CreditCard className="h-6 w-6" />,
    href: '/dashboard/payments',
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const supabase = createClient();
  const { user } = useUserInfo(supabase);
  const [showProBanner, setShowProBanner] = useState<boolean | null>(true);

  return (
    <nav className="flex flex-col flex-grow justify-between items-start px-2 text-sm font-medium lg:px-4">
      <div className={'w-full space-y-2'}>
        {showProBanner && <ProBanner setShowProBanner={setShowProBanner} />}
      </div>
    </nav>
  );
}
