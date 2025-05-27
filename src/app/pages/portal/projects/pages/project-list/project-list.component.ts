import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { experiences } from '../../../../../core/data/experiencie';
import { ProjectDescriptionDialogComponent } from '../../components/project-description-dialog/project-description-dialog.component';

@Component({
  selector: 'app-project-list',
  imports: [ CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  matDialog = inject(MatDialog);

  experiencies = experiences;


  open(indexCompany: number, indexProject: number) {
    this.matDialog.open(ProjectDescriptionDialogComponent, {
      data: {
        indexCompany: indexCompany,
        indexProject: indexProject
      },
      maxWidth: '1800px',
      height: '80%',
    });
  }

}
