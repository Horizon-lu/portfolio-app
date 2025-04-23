import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface TechnologyCard {
  name: string;
  url: string;
  bgColor: string;
  textColor: string;
  intro: string;
  items: string[];
}

@Component({
  selector: 'app-technical-list',
  imports: [CommonModule],
  templateUrl: './technical-list.component.html',
  styleUrl: './technical-list.component.scss'
})
export class TechnicalListComponent  {

  route = inject(ActivatedRoute);


  technologies = signal<TechnologyCard[]>([
    {
      name: "Java",
      url: "technologies/java.svg",
      bgColor: "bg-blue-100",
      textColor: "text-black",
      intro: "Here are some of the tools and skills I've gained experience with while working in Java development:",
      items: [
        "Object-Oriented Programming (OOP)",
        "Java 17 / Java 21",
        "Spring Framework (Spring Boot, Spring MVC, Spring Data)",
        "Hibernate / JPA",
        "REST APIs (creation and consumption)",
        "JUnit / Mockito (testing)",
        "Maven / Gradle",
        "Java Streams and collections"
      ]
    },
    {
      name: "Spring Boot",
      url: "technologies/spring.svg",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      intro: "These are some of the most in-demand tools and knowledge in the Spring Boot ecosystem that I have experience with:",
      items: [
        "Hibernate / JPA",
        "Complex queries using JPQL or Native SQL",
        "Exception handling",
        "REST APIs (creation and consumption)",
        "JUnit / Mockito (testing)",
        "Maven / Gradle",
        "Reactive programming (Reactor, WebFlux)",
        "Microservice communication"
      ]
    },
    {
      name: "Quarkus",
      url: "technologies/quarkus.svg",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      intro: "Experience with tools and key concepts in modern applications using Quarkus:",
      items: [
        "Dependency injection with CDI",
        "Creating REST APIs with JAX-RS",
        "Persistence with Panache (JPA)",
        "Scheduled tasks with @Scheduled",
        "Testing with @QuarkusTest and RestAssured",
        "Native build with GraalVM",
        "CI/CD implementation with GitLab and Kubernetes",
        "Microservices and communication with REST/REST Client"
      ]
    },
    {
      name: "Golang",
      url: "technologies/go.svg",
      bgColor: "bg-sky-100",
      textColor: "text-sky-700",
      intro: "Technical stack in Go focused on performance, continuous deployment, and maintainability:",
      items: [
        "RESTful APIs using the Gin framework",
        "Persistence with GORM or Squirrel + pgx (depending on the case)",
        "Concurrency with Goroutines and efficient resource usage",
        "Command and task automation using task",
        "Continuous integration with GitLab CI/CD",
        "Automated deployment in the cloud using Kubernetes",
        "Development using hexagonal architecture"
      ]
    },
    {
      name: "Angular",
      url: "technologies/angular.svg",
      bgColor: "bg-red-300",
      textColor: "text-red-700",
      intro: "Applied knowledge in the development of modern frontend applications with Angular:",
      items: [
        "Modular architecture and layered organization (core, shared, features)",
        "Use of Signals, Computed, and reactive effects for better performance",
        "Reactive forms with custom validations",
        "API consumption using HttpClient and centralized error handling",
        "Services, dependency injection, and protected routes",
        "Reusable components and communication with @Input() and @Output()",
        "Use of PrimeNG / PrimeFlex for responsive UI",
        "Use of other libraries like Angular Material, Ng-Zorro, and Tailwind",
        "Lazy loading and performance optimization"
      ]
    },
    {
      name: "Tailwind",
      url: "technologies/tailwind.svg",
      bgColor: "bg-cyan-100",
      textColor: "text-cyan-700",
      intro: "Practical use of Tailwind CSS to build modern, fast, and responsive interfaces:",
      items: [
        "Design directly from HTML using utility classes",
        "Responsive layouts using custom breakpoints",
        "Consistent styling with @apply and reusable components",
        "Theme customization via tailwind.config.js file",
        "Smooth animations and transitions with built-in utilities",
        "Use of Flex, Grid, and adaptive typography",
        "Integration with Angular and PrimeNG / PrimeFlex without conflicts"
      ]
    },
    {
      name: "GitHub",
      url: "technologies/github.svg",
      bgColor: "bg-slate-200",
      textColor: "text-gray-700",
      intro: "Professional use of GitHub for version control, collaboration, and continuous deployment:",
      items: [
        "Version control with Git in collaborative environments",
        "Branching strategies like feature/, hotfix/, release/",
        "Code reviews with Pull Requests and Issue management",
        "GitHub Actions to automate tests, builds, and deployments",
        "GitHub Pages for public documentation or demos"
      ]
    },
    {
      name: "GitLab",
      url: "technologies/gitlab.svg",
      bgColor: "bg-orange-300",
      textColor: "text-orange-700",
      intro: "Experience using GitLab as a complete DevOps platform:",
      items: [
        "Version control and code management in private environments",
        "Automated CI/CD pipelines with .gitlab-ci.yml",
        "Auto-deployment on Kubernetes clusters with Spot nodes",
        "Use of secret variables and staging/production environments",
        "Builds, tests, and deployments configured per project",
        "Pipeline monitoring through Merge Requests"
      ]
    },
    {
      name: "Trello",
      url: "technologies/trello.svg",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      intro: "Use of Trello for task organization, project planning, and progress tracking:",
      items: [
        "Boards organized by project stages (To Do, Doing, Done)",
        "Task management by priority and due dates",
        "Use of labels and checklists for clarity and tracking"
      ]
    },
    {
      name: "Slack",
      url: "technologies/slack.svg",
      bgColor: "bg-purple-300",
      textColor: "text-purple-700",
      intro: "Use of Slack as the main communication and collaboration tool within development teams:",
      items: []
    }
  ]);

  view = signal<string>(this.technologies()[0].name);

  constructor(){
    this.route.queryParams.subscribe({
      next:( query : any) => {
        if (query.technology){
          this.view.set(query.technology)
        }
      }
    })
  }

}
