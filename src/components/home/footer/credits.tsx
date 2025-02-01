import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRight } from 'lucide-react';
import { UpgradePlanModal } from '@/components/pro-banner/upgrade-plan-modal';

export function Credits() {
  return (
    <>
      <Separator className={'footer-border'} />
      <div
        className={
          'flex flex-col justify-center items-center gap-2 text-muted-foreground text-sm leading-[14px] py-[24px] bg-background/55'
        }
      >
        <div className={'flex justify-center items-center gap-2'}>
          <span className={'text-sm leading-[14px]'}>by</span>

          <UpgradePlanModal trigger={'pro_banner'}>
            <span className="--local-departure-mono cursor-crosshair">fafo_labs</span>
          </UpgradePlanModal>
        </div>
        <div className={'flex justify-center items-center gap-2 flex-wrap md:flex-nowrap'}>
          <Link className={'text-sm leading-[14px]'} href="/tos" target={'_blank'}>
            <span className={'flex items-center gap-1'}>
              Terms of use
              <ArrowUpRight className={'h-4 w-4'} />
            </span>
          </Link>
          <Link className={'text-sm leading-[14px]'} href="/privacy" target={'_blank'}>
            <span className={'flex items-center gap-1'}>
              Privacy
              <ArrowUpRight className={'h-4 w-4'} />
            </span>
          </Link>
        </div>
        <span className={'flex items-center gap-1'}>
          © 2025 Fafo Labs. All rights reserved.
        </span>
      </div>
    </>
  );
}
