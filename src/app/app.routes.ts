import { Routes } from '@angular/router';
import { Sezar } from './sezar/sezar';
import { RouterModule } from '@angular/router';
export const routes: Routes = [

  { path: '', redirectTo: 'sezar', pathMatch: 'full' },
  { path: 'sezar',
     component: Sezar
    }
];
