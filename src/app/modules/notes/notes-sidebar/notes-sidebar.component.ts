import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { NotesSidebarService } from './notes-sidebar.service';
import { EventBusService } from 'src/app/shared/services/event-bus.service';

@Component({
  selector: 'notes-sidebar',
  templateUrl: './notes-sidebar.component.html',
  styleUrls: ['./notes-sidebar.component.scss'],
  providers: [NotesSidebarService]
})
export class NotesSidebarComponent implements OnInit {
  public notesList = []
  public selectedNoteItem = null;
  public isAdding = false;
  public searchTerm = '';

  private defaultNoteData = {
    id: Math.random(),
    title: "",
    content: "",
    createdOn: "",
    updatedOn: ''
  }

  @Output() selectedNoteItemChange = new EventEmitter();
  selectedNoteItemMaster: any;

  constructor(private dataService: NotesSidebarService,
    private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.registerEvents();
    this.fetchNotesList(true);
  }

  private registerEvents() {
    this.eventBusService.on('saved', (data) => {
      this.fetchNotesList();
      this.isAdding = false;
    })

    this.eventBusService.on('cancel', (data) => {
      if (this.isAdding) {
        this.notesList.splice(0, 1)
        this.isAdding = false;
        this.onNoteItemClick(this.notesList[0]);
      } else {
        // this.fetchNotesList(true);
        const index = this.notesList.findIndex(item => item.id === data.id);
        this.notesList[index] = this.selectedNoteItemMaster;
        this.onNoteItemClick(this.notesList[index]);
      }
    })
  }

  private fetchNotesList(reset = false) {
    this.dataService.getAllNotesList().subscribe((data) => {
      this.notesList = data;
      if (data.length && reset) {
        this.onNoteItemClick(data[0]);
      }
    });
  }

  public onNoteItemClick(note) {
    this.selectedNoteItemMaster = { ...note };
    this.selectedNoteItem = note;
    this.selectedNoteItemChange.emit(note);
  }

  public removeItem(id: number) {
    this.dataService.deleteNote(id).subscribe(() => {
      this.fetchNotesList(true);
    })
  }

  public createNote() {
    this.isAdding = true;
    const emptyNote = {
      ...this.defaultNoteData,
      createdOn: (new Date()).toISOString(),
      updatedOn: (new Date()).toISOString(),
    };
    this.notesList = [emptyNote, ...this.notesList]
    this.onNoteItemClick(emptyNote);
  }
}
