import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <div className="z-10 mx-auto relative px-[32px] py-[18px] flex items-center bg-background/55 justify-between">
        <div className="flex flex-1 items-center justify-start">
          <Link className="flex items-center" href={'/'}>
            ResumeDesk
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          {/* <div className="flex space-x-4">
            {user?.id ? (
              <Button variant={'secondary'} asChild={true}>
                <Link href={'/dashboard'}>Dashboard</Link>
              </Button>
            ) : (
              <Button asChild={true} variant={'secondary'}>
                <Link href={'/login'}>Sign in</Link>
              </Button>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
}
