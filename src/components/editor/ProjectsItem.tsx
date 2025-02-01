import { Projects } from '@/types';
import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Plus, Trash2 } from 'lucide-react';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { format } from 'date-fns';
import { parseDate } from '@/lib/parseDate';
import { LinkText } from '@/components/editor/LinkText';

export const ProjectsItem: React.FC<{ projects: Projects; index: number; onDelete: () => void }> = ({
  projects,
  index,
  onDelete,
}) => {
  const [title, setTitle] = React.useState(projects.title);
  const [skills, setSkills] = React.useState(projects.skills);
  const [start, setStart] = React.useState(projects.duration.start);
  const [end, setEnd] = React.useState(projects.duration.end);
  const [details, setDetails] = React.useState(projects.details);
  const [isEditing, setIsEditing] = React.useState<boolean[]>(projects.details.map(() => false));
  const [isHovered, setIsHovered] = React.useState(false);

  const initialDateRange = React.useMemo(
    () => ({
      from: parseDate(start),
      to: parseDate(end),
    }),
    [start, end],
  );

  return (
    <Draggable draggableId={`experience-${index}`} index={index}>
      {(provided) => (
        <div
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
                    onBlur={(e) => setTitle(e.currentTarget.textContent || '')}
                  >
                    {title}
                  </div>
                  <div
                    className="italic text-sm"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => setSkills(e.currentTarget.textContent?.split(', ') || [])}
                  >
                    {skills.join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <DatePickerWithRange
                    date={initialDateRange}
                    onDateChange={(newDate) => {
                      if (newDate?.from) setStart(format(newDate.from, 'MMM yyyy'));
                      if (newDate?.to) setEnd(format(newDate.to, 'MMM yyyy'));
                    }}
                  />
                </div>
              </div>
              <ul className="list-none ml-4 text-sm mt-1">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start group relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const newDetails = [...details];
                        const newIsEditing = [...isEditing];
                        newDetails.splice(index, 1);
                        newIsEditing.splice(index, 1);
                        setDetails(newDetails);
                        setIsEditing(newIsEditing);
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity print:hidden absolute -left-6 top-1"
                    >
                      <Trash2 className="h-3 w-3 text-red-500 hover:text-red-700" />
                    </button>
                    {!isEditing[index] && (
                      <div
                        className="text-sm flex items-start before:content-['•'] before:mr-2 before:min-w-[8px] before:inline-block"
                        onClick={() => {
                          const newIsEditing = [...isEditing];
                          newIsEditing[index] = true;
                          setIsEditing(newIsEditing);
                        }}
                      >
                        <div className="flex-1">
                          <LinkText text={detail} />
                        </div>
                      </div>
                    )}
                    {isEditing[index] && (
                      <div
                        className="text-sm flex items-start before:content-['•'] before:mr-2 before:min-w-[8px] before:inline-block"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const newDetails = [...details];
                          newDetails[index] = e.currentTarget.textContent || '';
                          setDetails(newDetails);
                          const newIsEditing = [...isEditing];
                          newIsEditing[index] = false;
                          setIsEditing(newIsEditing);
                        }}
                      >
                        {detail}
                      </div>
                    )}
                  </li>
                ))}
                <div className="print:hidden ml-0">
                  <button
                    onClick={() => {
                      setDetails([...details, 'New bullet point']);
                      setIsEditing([...isEditing, true]);
                    }}
                    className={`text-blue-600 hover:text-blue-800 text-xs flex items-center transition-opacity ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Add Bullet Point
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
