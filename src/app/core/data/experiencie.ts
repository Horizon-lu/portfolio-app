export const experiences : {
  company: string;
  position: string;
  dateInit: Date,
  dateEnd?: Date,
  projects: {
    name: string;
    activity: string;
    description: string;
    technologies: string[];
    image: string[];
  }[]
}[] = [
  {
      company: 'Nivutech',
      dateInit: new Date('2024-04-01'),
      dateEnd: new Date('2025-02-01'),
      position: 'Backend Developer',
      projects : [
        {
          name: 'Pointree',
          description: 'A website that helps in the loyalty of customers to a store through a promotion service per visit.',
          image: ['pointree-1.png'],
          technologies: ['microservicios', 'quarkus', 'CI/CD', 'Gitlab'  ],
          activity: 'I have worked with a team in which I provided microservices of the requirements that I was asked in quarkus in which was some modules of the business logic, I was also in charge of migrating and separating some microservices and check that the CI/CD is working properly.'
        },
        {
          name: 'Tuventi',
          description: 'A system for sales management and electronic invoicing that records.',
          technologies: ['Spring boot', 'microservicios', "mjml"],
          image: ['tuventi-1.jpg'],
          activity: 'I have helped by inserting code as needed in spring boot webflux in the microservices provided to me. I have also helped in creating presentation templates in mjml and implementing it using aws or the free gmail provider.'
        },
        {
          name: 'Voice',
          description: 'A web software that is in charge of registering the channels, clients, devices, etc. of a callcenter.',
          technologies: ['Quarkus', 'angular', "batch", 'microservicios', "primefaces", "primeNg" ],
          image: ['voice-1.png'],
          activity: 'I have migrated a legacy callcenter project done in java with JSF (primefaces), which contained the part of managing devices, reports and batch processes to quarkus and angular (primeng), separating into microservices and using the ORM panache.'
        }
      ]
  },
   {
    company: 'Megafact',
    dateInit: new Date('2022-01-01'),
    dateEnd: new Date('2024-01-01'),
    position: 'Full Stack Developer',
    projects: [
      {
        name: 'Megafact',
        description: 'Web software for managing billing and sales processes, allowing users to generate invoices, track sales, and manage customer information.',
        technologies: ['Angular', 'Material Angular'],
        image: ['megafact-1.png', 'megafact-2.png'],
        activity: 'I have worked on the frontend of the project, creating components and services in Angular, as well as integrating with the backend APIs. I have also contributed to the design and implementation of user interfaces using Angular Material.'
      },
      {
        name: 'MegfactAcademico',
        description: 'Academic management platform for handling student attendance, course and term management, and overall academic administration.',
        technologies: ['Angular', "Material Angular", 'Spring Boot'],
        image: ['megfact-academico-1.png', 'megfact-academico-2.png'],
        activity: 'I have worked on the frontend of the project, creating components and services in Angular, as well as the integration with the backend APIs. I have also contributed to the design and implementation of user interfaces using Angular Material and inserting logics in the backend as needed.'
      },
      {
        name: 'MegaRestaurant',
        description: 'A restaurant management system that allows users to manage orders, menus, and customer interactions in real time.',
        image: ['megafact-restaurant-1.png', 'megafact-restaurant-2.gif'],
        technologies: ['Angular', 'Spring Boot', 'Socket'],
        activity: 'I have worked on the frontend of the project, creating components and services in Angular, as well as the integration with the backend APIs. I also contributed to the design and implementation of user interfaces and backend logic for the implementation of socket for a real time experience on table management in the restaurant.'
      }
    ],
  },
]
