import { SuccessPageGradients } from '@/components/gradients/success-page-gradients';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import '../../../styles/checkout.css';
import { Check } from 'lucide-react';
import { createClient } from '@/utils/supabase/server';

export default async function SuccessPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main>
      <div className={'relative h-screen overflow-hidden'}>
        <SuccessPageGradients />
        <div className={'absolute inset-0 px-6 flex items-center justify-center'}>
          <div className={'flex flex-col items-center text-white text-center'}>
            <Check className={'pb-12'} size={100} />
            <h1 className={'text-4xl md:text-[80px] leading-9 md:leading-[80px] font-medium pb-6'}>
              Payment successful
            </h1>
            <p className={'text-lg pb-16'}>Success! Your payment is complete, and you’re all set.</p>
            <Button variant={'secondary'} asChild={true}>
              {data.user ? <Link href={'/dashboard'}>Go to Dashboard</Link> : <Link href={'/'}>Go to Home</Link>}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
