import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export function CheckoutHeader() {
  return (
    <div className={'flex gap-4'}>
      <Link href={'/'}>
        <Button variant={'secondary'} className={'h-[32px] bg-[#182222] border-border w-[32px] p-0 rounded-[4px]'}>
          <ChevronLeft />
        </Button>
      </Link>
      <div className={'flex flex-col'}>
        <span className={'text-2xl font-normal --local-clashgrotesk'}>ResumeDesk</span>
        <span className={'text-xs font-normal --local-departure-mono'}>by fafo_labs</span>
      </div>
    </div>
  );
}
