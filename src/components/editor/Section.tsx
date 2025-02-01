'use client';
import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { GripVertical, Plus, Trash2 } from 'lucide-react';
interface SectionProps {
  pilot: boolean;
  title: string;
  children: React.ReactNode;
  index: number;
  onAddItem?: () => void;
  onRemoveSection?: () => void;
}

export const Section: React.FC<SectionProps> = ({ title, children, index, onAddItem, onRemoveSection, pilot }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [sectionTitle, setSectionTitle] = React.useState(title);

  return (
    <Draggable draggableId={`section-${title}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="mb-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-2">
            <div
              {...provided.dragHandleProps}
              className={`cursor-grab p-1 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <GripVertical id={pilot ? 'driverHeader4' : undefined} className="h-4 w-4" />
            </div>
            <div className="w-full">
              <div id={pilot ? 'driverHeader3' : undefined} className="flex justify-between items-center">
                <h2
                  className="text-black uppercase font-times"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => setSectionTitle(e.currentTarget.textContent || title)}
                >
                  {sectionTitle}
                </h2>
                <div className={`flex gap-4 text-xs transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  {onAddItem && (
                    <button
                      id={pilot ? 'driverHeader5' : undefined}
                      onClick={onAddItem}
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add {sectionTitle}
                    </button>
                  )}
                  {onRemoveSection && (
                    <button onClick={onRemoveSection} className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
              <div className="border-b border-black" />
            </div>
          </div>

          <Droppable droppableId={`section-${title}-items`} type={`${title}-items`}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {children}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
