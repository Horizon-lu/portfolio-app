import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-technical-list',
  imports: [CommonModule],
  templateUrl: './technical-list.component.html',
  styleUrl: './technical-list.component.scss'
})
export class TechnicalListComponent {

  view = signal<string>(null);

  technologies = signal<{ url: string, alt: string }[]>([
    {
      url: 'technologies/java.svg',
      alt: 'Java'
    },
    {
      url: 'technologies/spring.svg',
      alt: 'Spring framework'
    },
    {
      url: 'technologies/quarkus.svg',
      alt: "Quarkus"
    },
    {
      url: 'technologies/go.svg',
      alt: 'Golang'
    },
    {
      url: 'technologies/angular.svg',
      alt: 'Angular'
    },
    {
      url: 'technologies/tailwind.svg',
      alt: 'Tailwind'
    },
    {
      url: 'technologies/github.svg',
      alt: 'Github'
    },
    {
      url: 'technologies/gitlab.svg',
      alt: 'Gitlab'
    },
    {
      url: 'technologies/trello.svg',
      alt: 'Trello'
    },
    {
      url: 'technologies/slack.svg',
      alt: 'Slack'
    }
  ])

}
