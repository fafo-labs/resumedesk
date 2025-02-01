export type SectionItem = Education | Experience | TechnicalSkills | Projects | CustomSection;

export interface Link {
  url: string;
  text: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  duration: {
    start: string;
    end: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: {
    start: string;
    end: string;
  };
  details: string[];
}

export interface TechnicalSkills {
  id: string;
  category: string;
  skills: string[];
}

export interface Projects {
  id: string;
  title: string;
  skills: string[];
  details: string[];
  duration: {
    start: string;
    end: string;
  };
}

export interface CustomSection {
  id: string;
  title: string;
  details: string[];
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  education: Education[];
  experience: Experience[];
  technicalSkills: TechnicalSkills[];
  projects: Projects[];
  customSections?: CustomSection[];
}
