import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ContactDialogComponent } from '../../components/contact-dialog/contact-dialog.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

  matDialog = inject(MatDialog);

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

  openContactDialog(){
    this.matDialog.open(ContactDialogComponent, {
      width: '350px',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      data: {
        title: 'Contact me'
      }
    });
  }

}
