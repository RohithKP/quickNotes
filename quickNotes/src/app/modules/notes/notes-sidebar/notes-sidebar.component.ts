import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NotesSidebarService } from './notes-sidebar.service';

@Component({
  selector: 'notes-sidebar',
  templateUrl: './notes-sidebar.component.html',
  styleUrls: ['./notes-sidebar.component.scss'],
  providers: [NotesSidebarService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesSidebarComponent implements OnInit {
  public notesList = []
  constructor(private dataService: NotesSidebarService) { }

  ngOnInit(): void {
    this.fetchNotesList();
  }

  fetchNotesList() {
    this.dataService.getAllNotesList().subscribe((data) => {
      this.notesList = data;
    });
  }

}
