import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { interval, Subscription } from 'rxjs';
import { experiences } from '../../../../../core/data/experiencie';

@Component({
  selector: 'app-project-description-dialog',
  imports: [MatIconModule, MatButtonModule, CommonModule, MatDialogClose],
  templateUrl: './project-description-dialog.component.html',
  styleUrl: './project-description-dialog.component.scss'
})
export class ProjectDescriptionDialogComponent implements OnInit, OnDestroy {
  data : {  indexCompany: number, indexProject: number } = inject(MAT_DIALOG_DATA);

  processChangeIndex!: Subscription;
  experiences = experiences;

  triggerAnimation = signal<boolean>(false);

  companyIndex = signal<number>(this.data.indexCompany);
  projectIndex = signal<number>(this.data.indexProject);
  imageIndex = signal<number>(0);

  project = computed(() =>  experiences[this.companyIndex()].projects[this.projectIndex()]);
  progressPercent = computed(() => {
    return 100 * (this.projectIndex() + 1) / this.experiences[this.companyIndex()].projects.length ;
  })

  ngOnInit(): void {
    this.loadInvervalImage();
  }

  loadInvervalImage() {
    if (this.processChangeIndex) {
      this.processChangeIndex.unsubscribe();
    }

    this.processChangeIndex = interval(20000).subscribe(() => {
      this.changeImageIndex(1);
    });
  }

  changeSelectedProject(indexAdd: number) {
    const indexPrev = this.projectIndex();
    if (indexPrev + indexAdd >= this.experiences[this.companyIndex()].projects.length){
      const nextCompany = this.companyIndex() + 1 >= this.experiences.length ? 0 : this.companyIndex() + 1;
      this.companyIndex.set(nextCompany)
      this.projectIndex.set(0);
    } else if (indexPrev + indexAdd < 0) {
      const prevCompany = this.companyIndex() - 1 < 0 ? this.experiences.length - 1 : this.companyIndex() - 1;
      this.companyIndex.set(prevCompany)
      this.projectIndex.set(this.experiences[prevCompany].projects.length - 1);
    } else {
      this.projectIndex.set(indexPrev + indexAdd);
    }

    this.imageIndex.set(0);
    this.loadInvervalImage();
  }

  changeImageIndex(indexAdd: number) {
    const indexPrev = this.imageIndex();
    if (indexPrev + indexAdd >= this.project().image.length) {
      this.imageIndex.set(0);
    } else if (indexPrev + indexAdd < 0) {
      this.imageIndex.set(this.project().image.length - 1);
    } else {
      this.imageIndex.set(indexPrev + indexAdd);
    }
    this.loadInvervalImage();
  }

  triggerAnimationChange() {
    this.triggerAnimation.set(!this.triggerAnimation());
    setTimeout(() => {
      this.triggerAnimation.set(!this.triggerAnimation());
    }
    , 300);
  }

  ngOnDestroy(): void {
    if (this.processChangeIndex) {
      this.processChangeIndex.unsubscribe();
    }
  }
}
