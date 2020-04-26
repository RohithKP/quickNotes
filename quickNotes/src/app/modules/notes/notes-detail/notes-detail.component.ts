import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
