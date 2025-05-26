import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-description-dialog',
  imports: [],
  templateUrl: './project-description-dialog.component.html',
  styleUrl: './project-description-dialog.component.scss'
})
export class ProjectDescriptionDialogComponent {
  data : {  indexCompany: number, indexProject: number } = inject(MAT_DIALOG_DATA);

}
