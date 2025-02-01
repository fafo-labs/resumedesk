import Link from 'next/link';
import { BackgroundLines } from '@/components/ui/background-lines';

export function HeroSection() {
  return (
    <BackgroundLines className="w-full h-full bg-transparent">
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
        {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#1C1C1F] px-4 py-2 text-sm text-white"> */}
          {/* This project was meant to be a paid product with AI features. You'll find signs of pricing setup all around the codebase. */}
          {/* <span className="inline-flex items-center gap-2">🚀 Early Access Pricing</span> */}
          {/* <span className="rounded-full bg-[#2C2C30] px-2 py-0.5">50% Off ↓</span> */}
        {/* </div> */}

        <h1 className="max-w-4xl text-4xl font-medium text-white sm:text-5xl md:text-6xl lg:text-7xl --local-clashgrotesk">
          Create a perfect
          <br />
          resume in minutes
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          ResumeDesk makes it easy to write, organize, and share your resume with anyone.
        </p>

        <Link
          href="/editor"
          className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-[1.02] relative after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:transition-opacity hover:after:opacity-100 after:shadow-[0_0_40px_10px_rgba(255,255,255,0.25)]"
        >
          Try the editor →
        </Link>

        <p className="mt-4 text-sm text-gray-500">No account or credit card required.</p>
      </section>
    </BackgroundLines>
  );
}
