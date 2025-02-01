'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface ControlPanelProps {
  availableSections: string[];
  currentSections: string[];
  onAddSection: (section: string) => void;
  children?: React.ReactNode;
}

export function ControlPanel({ availableSections, currentSections, onAddSection, children }: ControlPanelProps) {
  const getAvailableSections = () => {
    return availableSections.filter((section) => !currentSections.includes(section));
  };

  return (
    <div className="sticky top-0 z-10 bg-white border-b">
      <div className="max-w-[850px] mx-auto px-12 py-4 flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-1 font-normal  rounded-xxs"
              disabled={getAvailableSections().length === 0}
            >
              Sections
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {getAvailableSections().map((section) => (
              <DropdownMenuItem key={section} onClick={() => onAddSection(section)}>
                {section}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {children}
      </div>
    </div>
  );
}
