'use client';

import { Download, LayoutDashboard, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ResumeSidebarProps {
  availableSections?: string[];
  currentSections?: string[];
  onAddSection?: (section: string) => void;
}

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: <LayoutDashboard className="h-6 w-6" />,
    href: '/dashboard',
  },
  {
    title: 'Download',
    icon: <Download className="h-6 w-6" />,
    href: '/dashboard',
  },
];

export function ResumeSidebar({ availableSections = [], currentSections = [], onAddSection }: ResumeSidebarProps) {
  const pathname = usePathname();

  const getAvailableSections = () => {
    return availableSections.filter((section) => !currentSections.includes(section));
  };

  return (
    <nav className="flex flex-col flex-grow justify-between items-start px-2 text-sm font-medium lg:px-4">
      <div className={'w-full space-y-2'}>
        {sidebarItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={cn('flex items-center text-base gap-3 px-4 py-3 rounded-xxs dashboard-sidebar-items', {
              'dashboard-sidebar-items-active':
                item.href === '/dashboard' ? pathname === item.href : pathname.includes(item.href),
            })}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}

        {onAddSection && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full gap-2 justify-between px-4 py-3 h-auto font-medium dashboard-sidebar-items"
                disabled={getAvailableSections().length === 0}
              >
                <span className="flex items-center gap-3">
                  <span>Add Section</span>
                </span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              {getAvailableSections().map((section) => (
                <DropdownMenuItem key={section} onClick={() => onAddSection(section)}>
                  {section}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
}
