import { ReactNode } from 'react';
import { EditorLayout } from '@/components/dashboard/layout/editor-layout';
// import { createClient } from '@/utils/supabase/server';
// import { redirect } from 'next/navigation';

interface Props {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  // const supabase = createClient();
  // const { data } = await supabase.auth.getUser();
  // if (!data.user) {
  //   redirect('/login');
  // }
  return <EditorLayout>{children}</EditorLayout>;
}
