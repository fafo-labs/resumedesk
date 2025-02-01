// import { useState } from 'react';
// import { createClient } from '@/utils/supabase/client';
// import { useUserInfo } from '@/hooks/useUserInfo';
import '../../styles/home-page.css';
import Header from '@/components/home/header/header';
import { HeroSection } from '@/components/home/hero-section/hero-section';
import { Footer } from '@/components/home/footer/footer';
import { HomePageBackground } from '../gradients/home-page-background';

export function HomePage() {
  // const supabase = createClient();
  // const { user } = useUserInfo(supabase);
  // const [country, setCountry] = useState('US');

  return (
    <>
      <HomePageBackground />
      <Header />
      <HeroSection />
      {/* This project was meant to be a paid product with AI features. You'll find signs of pricing setup all around the codebase. */}
      {/* <Pricing country={country} /> */}
      <Footer />
    </>
  );
}
