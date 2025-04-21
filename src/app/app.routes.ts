import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/portal/portal.component').then(m => m.PortalComponent),
        loadChildren: () => import('./pages/portal/portal.routes').then(m => m.routes)
    }
];
