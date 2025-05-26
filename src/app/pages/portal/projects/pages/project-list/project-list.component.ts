import { Component, inject } from '@angular/core';
import { experiences } from '../../../../../core/data/experiencie';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDescriptionDialogComponent } from '../../components/project-description-dialog/project-description-dialog.component';

@Component({
  selector: 'app-project-list',
  imports: [],
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
      width: '80%',
      maxWidth: '800px',
      panelClass: 'custom-dialog-container'
    });
  }

}
