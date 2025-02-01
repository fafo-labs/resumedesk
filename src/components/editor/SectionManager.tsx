import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface SectionManagerProps {
  availableSections: string[];
  currentSections: string[];
  onAddSection: (sectionId: string) => void;
}

export function SectionManager({ availableSections, currentSections, onAddSection }: SectionManagerProps) {
  const remainingSections = availableSections.filter((section) => !currentSections.includes(section));

  if (remainingSections.length === 0) return null;

  return (
    <div className="flex gap-2 mb-4">
      {remainingSections.map((section) => (
        <Button
          key={section}
          variant="outline"
          size="sm"
          onClick={() => onAddSection(section)}
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" />
          Add {section}
        </Button>
      ))}
    </div>
  );
}
