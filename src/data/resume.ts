import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: 'Name Surname',
  contact: {
    email: 'name@gmail.com',
    phone: '+91 000000-000',
    linkedin: 'linkedin.com/in/name',
    github: 'github.com/name',
    website: 'namesurname.com',
  },
  education: [
    {
      id: 'edu_1',
      institution: 'Assam Engineering College, Gauhati University',
      degree: 'Bachelor of Engineering (Honors) in Computer Science & Eng., First Class, 80.5% (Rank:3)',
      location: 'Guwahati, IND',
      duration: {
        start: 'Aug 2021',
        end: 'Sept 2025',
      },
    },
    {
      id: 'edu_2',
      institution: 'Stanford University',
      degree: 'Visiting Undergraduate Student, Computer Science, Summer Session, GPA: 3.7/4',
      location: 'California, USA',
      duration: {
        start: 'June 2024',
        end: 'Aug 2024',
      },
    },
    {
      id: 'edu_3',
      institution: 'Central Board of Secondary Education',
      degree: 'Intermediate (XII) : 93.6%, Matriculation (X) : 9.4/10',
      location: 'Golaghat, IND',
      duration: {
        start: 'May 2019',
        end: 'May 2021',
      },
    },
  ],
  projects: [
    {
      id: 'project_1',
      title: 'TaskFlow - Project Management Application',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'TailwindCSS', 'JWT Auth'],
      details: [
        'Built a full-stack project management application with real-time collaboration features using MERN stack and WebSocket',
        'Implemented JWT authentication, role-based access control, and email notifications using NodeMailer',
        'Created responsive UI with drag-and-drop task management, charts for project analytics, and real-time updates',
        'Deployed application using Docker containers on AWS EC2 with CI/CD pipeline using GitHub Actions',
      ],
      duration: {
        start: 'Jan 2024',
        end: 'Mar 2024',
      },
    },
  ],
  experience: [
    {
      id: 'exp_1',
      company: 'Landesbetrieb Straßen, Brücken und Gewässer',
      role: 'Software Engineer, Cognitive Compute and AI at Digi Lab, LSBG',
      location: 'Hamburg, Germany',
      duration: {
        start: 'April 2021',
        end: 'Present',
      },
      details: [
        'We at Digi Lab, LSBG, Authority for Economy, Transport and Innovation (BWVI), Government of Germany are developing software infrastructure for smart cities in Germany.',
        'Working on projects "Reallytics" and "3D Variant Builder" where we are developing distributed intelligent and interactive web applications with machine learning back-end for Citizens and city administrators.',
        'Tech Stack: Python, Kafka, PyTorch, Docker, ReactJS, Spark Stream, node.js, Babylon.js, Cesium.js, Azure.',
      ],
    },
    {
      id: 'exp_3',
      company: 'University of Leeds',
      role: 'Deep Learning Researcher Intern, Robotics Laboratory, School of Computing',
      location: 'Leeds, UK',
      duration: {
        start: 'Feb 2020',
        end: 'April 2020',
      },
      details: [
        'Worked on "3D pose tracking of objects in occlusion or cluttered environments" with Prof Dr. Mehmet R. Dogar, Rafael Papallas and Wisdom Agboh.',
        'Received a merit scholarship from Government of Assam, India to carry out research, analysis and development of novel RGB-D 6D pose tracking algorithm on YCB and LINEMOD dataset with Dr. Mehmet Dogar.',
        'Tech Stack: Singularity Containerization, Python, PyTorch, TensorFlow 2.0, ROS.',
      ],
    },
    {
      id: 'exp_4',
      company: 'Indian Institute of Technology Guwahati (IIT Guwahati)',
      role: 'Machine Learning Engineer Intern, System Simulation Laboratory, EEE Department',
      location: 'Guwahati, IND',
      duration: {
        start: 'June 2019',
        end: 'Sept 2019',
      },
      details: [
        'Developed a novel algorithm for ECG signal analysis in SCG subspace with machine learning and deep learning under Prof. M.K. Bhuyan.',
        'Trained SVR-RBF kernel, custom DNN with sparse autoencoder and achieved an accuracy of 99.99% and 99.50% respectively. Developed a Flask web-application with GCP to contain and visualize the machine learning model.',
      ],
    },
    {
      id: 'exp_5',
      company: 'Institute of Advanced Study in Science and Technology (IASST)',
      role: 'Computer Vision Researcher Intern, Centre for Computational & Numeric Studies',
      location: 'Guwahati, IND',
      duration: {
        start: 'Dec 2017',
        end: 'Mar 2018',
      },
      details: [
        'Developed CNN architectures for classification of Fine Needle Aspiration Cytology (FNAC) tissue cell samples and made a comparative study. Published Paper (Elsevier) : "Comparative assessment of CNN architectures for breast FNAC tissue samples". https://doi.org/10.1016/j.iece.2019.02.001 with Prof. Lipi B. Mahanta.',
        'Achieved an accuracy of 96.25% for fine-tuned GoogleNet-v3 CNN architecture on the FNAC dataset.',
        'Comparative assessment of GoogleNet-v3 with VGG16, VGG19 and ResNet-50 along with fine tuned versions.',
      ],
    },
  ],
  technicalSkills: [
    {
      id: 'skill_1',
      category: 'Languages',
      skills: ['Python', 'C/C++', 'Go', 'JavaScript'],
    },
    {
      id: 'skill_2',
      category: 'Frameworks',
      skills: ['React', 'Node.js', 'Flask', 'Django', 'Babylon', 'Leaflet', 'Cesium', 'FastAPI', 'MongoDB', 'Firebase'],
    },
    {
      id: 'skill_3',
      category: 'Developer Tools',
      skills: [
        'Linux',
        'Git',
        'Docker',
        'Kafka',
        'Spark Stream',
        'Prometheus',
        'Grafana',
        'Azure',
        'Google Cloud Platform',
      ],
    },
    {
      id: 'skill_4',
      category: 'Libraries',
      skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'TensorFlow 2.0', 'PyTorch', 'ROS'],
    },
  ],
};
