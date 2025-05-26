import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.routes').then(m => m.routes)
    },
    {
        path: 'me',
        loadChildren: () => import('./about/about.routes').then(m => m.routes)
    },
    {
        path: 'skills',
        loadChildren: () => import('./skill/skill.routes').then(m => m.routes)
    },
    {
        path: 'projects',
        loadChildren: () => import('./projects/project.routes').then(m => m.routes)
    }
];
