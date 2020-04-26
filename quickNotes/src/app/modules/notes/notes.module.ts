import { HighlightSearch } from './../../shared/pipes/highlight.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesSidebarComponent } from './notes-sidebar/notes-sidebar.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';


@NgModule({
  declarations: [NotesComponent, NotesSidebarComponent, NotesDetailComponent, HighlightSearch],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: []
})
export class NotesModule { }
