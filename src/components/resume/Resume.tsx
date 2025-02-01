'use client';
import Confetti from 'react-confetti';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { Education, Experience, Projects, TechnicalSkills, CustomSection } from '@/types';
import React, { useRef, useState, useEffect } from 'react';
import { SectionItem } from '@/types';
import { resumeData } from '@/data/resume';
import { Header } from '@/components/editor/Header';
import { Section } from '@/components/editor/Section';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ControlPanel } from '@/components/editor/ControlPanel';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { ProjectsItem } from '@/components/editor/ProjectsItem';
import { SkillsSection } from '@/components/editor/SkillSection';
import { EducationItem } from '@/components/editor/EducationItem';
import { ExperienceItem } from '@/components/editor/ExperienceItem';
import { CustomSectionItem } from '@/components/editor/CustomSectionItem';
import { useReactToPrint } from 'react-to-print';
import { ContactInfo } from '@/types';
import Link from 'next/link';

export function Resume() {
  const [showConfetti, setShowConfetti] = useState(false);

  const driverObj = driver({
    showProgress: true,
    onDestroyed: () => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000);
    },
    steps: [
      { popover: { title: 'Title', description: "Here's a quick guide to help you get started" } },
      { element: '#driverHeader1', popover: { title: 'Title', description: 'These are sections' } },
      {
        element: '#driverHeader2',
        popover: {
          title: 'Title',
          description: 'These are editable fields . You can edit them by clicking on them',
        },
      },
      {
        element: '#driverHeader4',
        popover: {
          title: 'Controls',
          description: 'You can grab and move the section around. Hover here ✨',
        },
      },
      {
        element: '#driverHeader5',
        popover: {
          title: 'Add items',
          description: 'You can add items to the section by clicking this button. Click here ✨',
        },
      },
      {
        element: '#driverHeader6',
        popover: {
          title: 'Section item',
          description:
            'This is a section item. Hover on it to reveal the delete 🔴 button. Clicking on it will delete the item.',
        },
      },
      {
        element: '#driverHeader7',
        popover: {
          title: 'Calendar',
          description: 'Click on it!✨',
        },
      },
      {
        element: '#driverHeader8',
        popover: {
          title: 'Done',
          description: 'You are good to go!✨',
        },
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(true);

  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    const guideVisits = parseInt(localStorage.getItem('guideVisits') || '0');
    if (!(window.innerHeight > window.innerWidth) && guideVisits < 2) {
      driverObj.drive();
      localStorage.setItem('guideVisits', (guideVisits + 1).toString());
    }

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  const [sections, setSections] = React.useState<
    Array<{
      id: string;
      title: string;
      items: SectionItem[];
    }>
  >([]);

  const availableSections = ['Education', 'Experience', 'Skills', 'Projects', 'Custom Section'];

  const addNewItem = (sectionId: string) => {
    setSections((prevSections) => {
      const newSections = prevSections.map((section) => {
        if (section.id !== sectionId) return section;

        let newItem: SectionItem;

        switch (sectionId) {
          case 'education':
            newItem = {
              id: crypto.randomUUID(),
              institution: 'New Institution',
              degree: 'New Degree',
              location: 'Location',
              duration: { start: 'Jan 2024', end: 'Present' },
            };
            break;
          case 'experience':
            newItem = {
              id: crypto.randomUUID(),
              company: 'New Company',
              role: 'New Role',
              location: 'Location',
              duration: { start: 'Jan 2024', end: 'Present' },
              details: ['New detail'],
            };
            break;
          case 'technicalskills':
            newItem = {
              id: crypto.randomUUID(),
              category: 'New Category',
              skills: ['New Skill'],
            } as TechnicalSkills;
            break;
          case 'projects':
            newItem = {
              id: crypto.randomUUID(),
              title: 'New Project',
              skills: ['New Skill'],
              details: ['New detail'],
              duration: { start: 'Jan 2024', end: 'Present' },
            };
            break;
          default:
            newItem = {
              id: crypto.randomUUID(),
              title: section.title,
              details: ['New detail'],
            } as CustomSection;
        }

        return {
          ...section,
          items: [...section.items, newItem],
        };
      });

      saveToLocalStorage(newSections, headerData);
      return newSections;
    });
  };

  const removeSection = (sectionId: string) => {
    setSections((prev) => {
      const newSections = prev.filter((section) => section.id !== sectionId);
      saveToLocalStorage(newSections, headerData);
      return newSections;
    });
  };

  const addSection = (sectionTitle: string) => {
    const sectionId = sectionTitle.toLowerCase().replace(/\s+/g, '');
    const newSection = {
      id: sectionId,
      title: sectionTitle,
      items: [],
    };
    setSections((prev) => {
      const newSections = [...prev, newSection];
      saveToLocalStorage(newSections, headerData);
      return newSections;
    });
  };

  const deleteItem = (sectionId: string, itemId: string) => {
    setSections((prevSections) => {
      const newSections = prevSections.map((section) => {
        if (section.id !== sectionId) return section;

        return {
          ...section,
          items: section.items.filter((item) => {
            if ('id' in item) {
              return item.id !== itemId;
            }
            return true;
          }),
        };
      });
      saveToLocalStorage(newSections, headerData);
      return newSections;
    });
  };

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'section') {
      const newSections = Array.from(sections);
      const [removed] = newSections.splice(source.index, 1);
      newSections.splice(destination.index, 0, removed);
      setSections(newSections);
      return;
    }

    const sourceSection = sections.find((section) => `section-${section.title}-items` === source.droppableId);
    const destSection = sections.find((section) => `section-${section.title}-items` === destination.droppableId);

    if (sourceSection && destSection) {
      const newSections = sections.map((section) => {
        if (section.id === sourceSection.id) {
          const newItems = Array.from(section.items);
          const [removed] = newItems.splice(source.index, 1);
          if (section.id === destSection.id) {
            newItems.splice(destination.index, 0, removed);
          }
          return { ...section, items: newItems };
        }
        if (section.id === destSection.id && section.id !== sourceSection.id) {
          const newItems = Array.from(section.items);
          newItems.splice(destination.index, 0, sourceSection.items[source.index]);
          return { ...section, items: newItems };
        }
        return section;
      });
      setSections(newSections);
    }
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  const [headerData, setHeaderData] = React.useState({
    name: '',
    contact: {
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      website: '',
    },
  });

  const handleNameChange = (name: string) => {
    setHeaderData((prev) => {
      const newHeaderData = {
        ...prev,
        name,
      };
      saveToLocalStorage(sections, newHeaderData);
      return newHeaderData;
    });
  };

  const handleContactChange = (field: keyof ContactInfo, value: string) => {
    setHeaderData((prev) => {
      const newHeaderData = {
        ...prev,
        contact: {
          ...prev.contact,
          [field]: value,
        },
      };
      saveToLocalStorage(sections, newHeaderData);
      return newHeaderData;
    });
  };

  const saveToLocalStorage = (
    currentSections: Array<{ id: string; title: string; items: SectionItem[] }>,
    currentHeaderData: { name: string; contact: ContactInfo },
  ) => {
    const dataToSave = {
      name: currentHeaderData.name,
      contact: currentHeaderData.contact,
      education: currentSections.find((s) => s.id === 'education')?.items || [],
      experience: currentSections.find((s) => s.id === 'experience')?.items || [],
      projects: currentSections.find((s) => s.id === 'projects')?.items || [],
      technicalSkills: currentSections.find((s) => s.id === 'technicalskills')?.items || [],
    };
    localStorage.setItem('resumeData', JSON.stringify(dataToSave));
  };

  // Load data from localStorage on client-side only
  useEffect(() => {
    const loadInitialData = () => {
      const savedData = localStorage.getItem('resumeData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setSections([
          { id: 'education', title: 'Education', items: parsedData.education },
          { id: 'experience', title: 'Experience', items: parsedData.experience },
          { id: 'projects', title: 'Projects', items: parsedData.projects },
          {
            id: 'technicalskills',
            title: 'Skills',
            items: parsedData.technicalSkills,
          },
        ]);
        setHeaderData({
          name: parsedData.name,
          contact: parsedData.contact,
        });
      } else {
        // If no localStorage data, use default resumeData
        setSections([
          { id: 'education', title: 'Education', items: resumeData.education },
          { id: 'experience', title: 'Experience', items: resumeData.experience },
          { id: 'projects', title: 'Projects', items: resumeData.projects },
          {
            id: 'technicalskills',
            title: 'Skills',
            items: resumeData.technicalSkills,
          },
        ]);
        setHeaderData({
          name: resumeData.name,
          contact: resumeData.contact,
        });
      }
      setIsLoading(false);
    };

    loadInitialData();
  }, []);

  return (
    <>
      {showConfetti && <Confetti recycle={false}/>}
      {isPortrait && (
        <div className="fixed inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm md:hidden">
          <div className="p-6 text-center flex flex-col">
            <div className="mb-4 text-4xl">📱↔️</div>
            <h2 className="text-2xl font-semibold">Please Rotate Your Device</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For the best editing experience, please use a bigger screen or try landscape orientation.
            </p>
            <Link href="/dashboard" className="text-sm text-muted-foreground mt-4">
              <Button variant={'secondary'} className={'border-border px-2 rounded-[4px]'}>
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      )}
      <div className={isPortrait ? 'hidden' : undefined}>
        <ControlPanel
          availableSections={availableSections}
          currentSections={sections.map((s) => s.title)}
          onAddSection={addSection}
        >
          <Button variant="outline" size="sm" className="gap-2  rounded-xxs" onClick={() => reactToPrintFn()}>
            <Download className="h-4 w-4" />
            Download
          </Button>
        </ControlPanel>
        {isLoading ? (
          <div className="max-w-[850px] mx-auto py-8 px-4 font-times text-black animate-pulse">
            <div className="flex flex-col items-center space-y-4 mb-8">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="mb-6">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <div
              ref={contentRef}
              className="max-w-[850px] mx-auto py-8 px-4 font-times text-black"
              style={{ printColorAdjust: 'exact' }}
            >
              <Header
                name={headerData.name}
                contact={headerData.contact}
                onNameChange={handleNameChange}
                onContactChange={handleContactChange}
              />

              <Droppable droppableId="sections" type="section">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="pl-0" id="driverHeader1">
                    {sections.map((section, index) => (
                      <Section
                        pilot={index === 0}
                        key={section.id}
                        title={section.title}
                        index={index}
                        onAddItem={() => addNewItem(section.id)}
                        onRemoveSection={() => removeSection(section.id)}
                      >
                        {section.id === 'education' &&
                          section.items.map((item, idx) => (
                            <EducationItem
                              pilot={index === 0}
                              key={(item as Education).id}
                              education={item as Education}
                              index={idx}
                              onDelete={() => deleteItem(section.id, (item as Education).id)}
                            />
                          ))}
                        {section.id === 'experience' &&
                          section.items.map((item, idx) => (
                            <ExperienceItem
                              key={(item as Experience).id}
                              experience={item as Experience}
                              index={idx}
                              onDelete={() => deleteItem(section.id, (item as Experience).id)}
                            />
                          ))}
                        {section.id === 'technicalskills' &&
                          section.items.map((item, idx) => (
                            <SkillsSection
                              key={(item as TechnicalSkills).id}
                              skills={item as TechnicalSkills}
                              index={idx}
                              onDelete={() => deleteItem(section.id, (item as TechnicalSkills).id)}
                            />
                          ))}
                        {section.id === 'projects' &&
                          section.items.map((item, idx) => (
                            <ProjectsItem
                              key={(item as Projects).id}
                              projects={item as Projects}
                              index={idx}
                              onDelete={() => deleteItem(section.id, (item as Projects).id)}
                            />
                          ))}
                        {section.id !== 'education' &&
                          section.id !== 'experience' &&
                          section.id !== 'technicalskills' &&
                          section.id !== 'projects' &&
                          section.items.map((item, idx) => (
                            <CustomSectionItem
                              key={(item as CustomSection).id}
                              section={item as CustomSection}
                              index={idx}
                              onDelete={() => deleteItem(section.id, (item as CustomSection).id)}
                            />
                          ))}
                      </Section>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        )}
      </div>
    </>
  );
}
