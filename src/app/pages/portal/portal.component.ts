import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [RouterOutlet, MatDividerModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent implements AfterViewInit {

  router = inject(Router);

  navUrls = signal<{label : string ,redirect : string}[]>([
    {
      label: 'Technical Skills',
      redirect: '/skills' 
    },
    {
      label: 'About me',
      redirect: '/me'
    }
  ])

  openNavMobile = signal(false);
  

  protected readonly isMobile = signal(true);
  

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
  }

  ngAfterViewInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.changeStateSinedav(false);
    });
  }

  changeStateSinedav(state : boolean){
    this.openNavMobile.set(state);
    if (state){
      document.body.classList.toggle('no-scroll', this.openNavMobile());
    }else {
      document.body.classList.remove('no-scroll');
    }
  }

}
