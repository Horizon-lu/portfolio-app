import { MediaMatcher } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [RouterOutlet, MatDividerModule, RouterLink],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent  {

  navUrls = signal<{label : string ,redirect : string}[]>([
    {
      label: 'Technical Skills',
      redirect: '/skills' 
    },
    {
      label: 'About me',
      redirect: '/me'
    },
    {
      label: 'Projects',
      redirect: '#'
    }
  ])
  

  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
  }

}
