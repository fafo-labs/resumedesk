import { Education } from '@/types';
import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Trash2 } from 'lucide-react';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { format } from 'date-fns';
import { parseDate } from '@/lib/parseDate';

export const EducationItem: React.FC<{ education: Education; index: number; onDelete: () => void, pilot: boolean }> = ({
  education,
  index,
  onDelete,
  pilot,
}) => {
  const [institution, setInstitution] = useState(education.institution);
  const [degree, setDegree] = useState(education.degree);
  const [location, setLocation] = React.useState(education.location);
  const [start, setStart] = React.useState(education.duration.start);
  const [end, setEnd] = React.useState(education.duration.end);
  const [isHovered, setIsHovered] = React.useState(false);

  const initialDateRange = React.useMemo(
    () => ({
      from: parseDate(start),
      to: parseDate(end),
    }),
    [start, end],
  );

  return (
    <Draggable draggableId={`education-${index}`} index={index}>
      {(provided) => (
        <div
          id={index === 1 ? 'driverHeader6' : undefined}
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="ml-4 mb-[2px] page-break-inside-avoid"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-start gap-2">
            <div className="flex items-center">
              <div
                {...provided.dragHandleProps}
                className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* <div className="h-4 w-4"/> */}
              </div>
              <button
                onClick={onDelete}
                className={`p-1 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700" />
              </button>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div
                    className="font-semibold text-[15px]"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => setInstitution(e.currentTarget.textContent || '')}
                  >
                    {institution}
                  </div>
                  <div
                    className="italic text-sm"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => setDegree(e.currentTarget.textContent || '')}
                  >
                    {degree}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-sm font-thin"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => setLocation(e.currentTarget.textContent || '')}
                  >
                    {location}
                  </div>
                  <DatePickerWithRange
                    pilot={pilot}
                    date={initialDateRange}
                    onDateChange={(newDate) => {
                      if (newDate?.from) setStart(format(newDate.from, 'MMM yyyy'));
                      if (newDate?.to) setEnd(format(newDate.to, 'MMM yyyy'));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
