export const experiences : {
  company: string;
  position: string;
  dateInit: Date,
  dateEnd?: Date,
  projects: {
    name: string;
    description: string;
    technologies: string[];
    image: string[];
  }[]
}[] = [
  {
    company: 'Megafact',
    dateInit: new Date('2022-01-01'),
    dateEnd: new Date('2024-01-01'),
    position: 'Full Stack Developer',
    projects: [
      {
        name: 'Megafact',
        description: 'Web software for managing billing and sales processes, allowing users to generate invoices, track sales, and manage customer information.',
        technologies: ['Angular'],
        image: ['megafact-1.png', 'megafact-2.png']
      },
      {
        name: 'MegfactAcademico',
        description: 'Academic management platform for handling student attendance, course and term management, and overall academic administration.',
        technologies: ['Angular', 'Spring Boot'],
        image: ['megfact-academico-1.png', 'megfact-academico-2.png']
      }
    ],
  },
  {
      company: 'Nivutech',
      dateInit: new Date('2024-04-01'),
      dateEnd: new Date('2025-02-01'),
      position: 'Backend Developer',
      projects : [
        {
          name: 'Tuventi',
          description: 'A system for sales management and electronic invoicing that records.',
          technologies: ['Spring boot'],
          image: ['tuventi-1.jpg']
        }
      ]
  }
]
