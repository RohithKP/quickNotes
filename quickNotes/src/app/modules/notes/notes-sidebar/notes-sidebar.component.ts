import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'notes-sidebar',
  templateUrl: './notes-sidebar.component.html',
  styleUrls: ['./notes-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
