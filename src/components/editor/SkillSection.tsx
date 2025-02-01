import { TechnicalSkills } from '@/types';
import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Trash2 } from 'lucide-react';

export const SkillsSection: React.FC<{ skills: TechnicalSkills; index: number; onDelete: () => void }> = ({
  skills,
  index,
  onDelete,
}) => {
  const [category, setCategory] = React.useState(skills.category);
  const [skillsList, setSkillsList] = React.useState(skills.skills);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Draggable draggableId={`skills-${index}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="ml-4 page-break-inside-avoid"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-start gap-2">
            <div className="flex items-center">
              <div
                {...provided.dragHandleProps}
                className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* <GripVertical className="h-4 w-4" /> */}
              </div>
              <button
                onClick={onDelete}
                className={`p-1 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              >
                <Trash2 className="h-4 w-4 text-red-500 hover:text-red-700" />
              </button>
            </div>
            <div className="flex-1">
              <div className="text-sm">
                <span
                  className="font-semibold"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => setCategory(e.currentTarget.textContent || '')}
                >
                  {category}
                </span>
                :{' '}
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const newSkills = e.currentTarget.textContent?.split(', ') || [];
                    setSkillsList(newSkills);
                  }}
                >
                  {skillsList.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
