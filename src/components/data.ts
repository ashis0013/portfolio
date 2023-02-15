type work = {
  startDate: string
  endDate?: string
  position: string
  company: string
  companyLink: string
  works: string[]
}

export type project = {
  title: string
  description: string
  docLink?: string
  githubLink: string
  outLink?: string
}

export const exps: work[] = [
  {
    startDate: 'Jul. 2021',
    endDate: 'Jan. 2023',
    position: 'Software Engineer',
    company: 'Compass',
    companyLink: 'https://compass.com',
    works: [
      'Contributing to gRPC backend services responsible for generating insights for compass listings. Improved test coverage of the service codebase from 10% to 86%. Currently contributing to new features to gather openhouse and email-campaign insights',
      'Developed a backend microservice to gather insights on the third party support ticketing service, which helped product team to identify the problem areas in customer support and helped the support team to reduce the resolution time by 25%.',
      'Delivered frontend features using React to enhance article search used in the compass Support and Onboarding System',
      'Worked with CRM and TM Android team and delivered crucial features such as Client Dashboard, Contact Import, Household Support which are being used by over 10 thousands compass agents',
      'Fixed over 10 production crashes during on-call duty and refactored over 5000 lines of code on the Android codebase',
    ],
  },
  {
    startDate: 'May. 2020',
    endDate: 'Jul. 2020',
    position: 'software Engineer Intern',
    company: 'Microsoft',
    companyLink: 'https://www.microsoft.com/en-in',
    works: [
      'Developed a pClick model to predict clickability of bing ads from global market data using Aether and Scope',
      'Studied impact of the global model on the large and small markets where the global model performed as good (less by 0.01%) as market specific models',
    ],
  },
]

export const projects: project[] = [
  {
    title: 'Feedback Ingestion system',
    githubLink: 'https://github.com/ashis0013/feedback-ingestion',
    docLink:
      'https://docs.google.com/document/d/1zE1wLhNrZn8bFSIiHCW75SIGVYvzuEjvgRINzFFeRzg/edit?usp=sharing',
    description:
      'Plugable and scalable feedback ingestion system written in go. Able to pull feedbacks related to relevant tenants from different sources.',
  },
  {
    title: 'COVID detection from X-Ray',
    githubLink: 'https://github.com/ashis0013/Inverted-Bell-Curve-Ensemble',
    docLink: 'https://link.springer.com/article/10.1007/s00521-021-06737-6',
    description:
      'An ensemble of transfer learned model using a novel weighted average scheme using inverted bell curves to detect COVID from X-Ray images',
  },
  {
    title: 'gollection',
    description:
      'Functional utilites for go slices and maps implimented with go generics. Includes useful methods like map, filter etc',
    githubLink: 'https://github.com/ashis0013/gollections',
    outLink: 'https://pkg.go.dev/github.com/ashis0013/gollections',
  },
  {
    title: 'SinLU',
    description:
      'a new non-linear trainable activation function, called Sinu-sigmoidal Linear Unit (SinLU), which incorporates sinusoidal properties in an activation function with maintaining a ReLU-like structure',
    githubLink: 'https://github.com/ashis0013/sinlu',
    docLink: 'https://www.mdpi.com/2227-7390/10/3/337/pdf',
  },
  {
    title: 'tuihub',
    description:
      'A tui application to manage your todos and getting handy information on machine usage and time. The todo is stored locally and for machine usage details gopsutil is used',
    githubLink: 'https://github.com/ashis0013/tuihub',
  },
]
