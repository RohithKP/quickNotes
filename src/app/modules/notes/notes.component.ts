import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  public selectedNoteItem;
  public isOpen = false;

  constructor() { }

  ngOnInit(): void {

  }

}
