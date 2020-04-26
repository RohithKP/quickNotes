import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { NotesSidebarService } from './notes-sidebar.service';

@Component({
  selector: 'notes-sidebar',
  templateUrl: './notes-sidebar.component.html',
  styleUrls: ['./notes-sidebar.component.scss'],
  providers: [NotesSidebarService]
})
export class NotesSidebarComponent implements OnInit {
  public notesList = []
  public selectedNoteItem = null;

  private defaultNoteData = {
    id: Math.random(),
    title: "",
    content: "",
    createdOn: "",
    updatedOn: ''
  }

  @Output() selectedNoteItemChange = new EventEmitter();

  constructor(private dataService: NotesSidebarService) { }

  ngOnInit(): void {
    this.fetchNotesList();
  }

  private fetchNotesList() {
    this.dataService.getAllNotesList().subscribe((data) => {
      this.notesList = data;
      if (data.length) {
        this.onNoteItemClick(data[0]);
      }
    });
  }

  public onNoteItemClick(note) {
    this.selectedNoteItem = note;
    this.selectedNoteItemChange.emit(note);
  }

  public removeItem(id: number) {
    this.dataService.deleteNote(id).subscribe(() => {
      this.fetchNotesList();
    })
  }

  public createNote() {
    const emptyNote = {
      ...this.defaultNoteData,
      createdOn: (new Date()).toISOString(),
      updatedOn: (new Date()).toISOString(),
    };
    this.notesList = [emptyNote, ...this.notesList]
    this.onNoteItemClick(emptyNote);
  }
}
