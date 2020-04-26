import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesSidebarComponent } from './notes-sidebar/notes-sidebar.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';


@NgModule({
  declarations: [NotesComponent, NotesSidebarComponent, NotesDetailComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MomentModule
  ]
})
export class NotesModule { }
