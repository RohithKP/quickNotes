import { HighlightPipeModule } from './../../shared/pipes/highlight/highlight-pipe.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NotesSidebarComponent } from './notes-sidebar/notes-sidebar.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NoteSearchPipe } from './notes-search.pipe';


@NgModule({
  declarations: [NotesComponent, NotesSidebarComponent, NotesDetailComponent, NoteSearchPipe],
  imports: [
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    HighlightPipeModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: []
})
export class NotesModule { }
