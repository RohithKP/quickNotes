import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notes', loadChildren: () => import('./modules/notes/notes.module').then(m => m.NotesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
