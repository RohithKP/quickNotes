import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss'],
})
export class NotesDetailComponent implements OnInit, OnChanges {
  @Input() noteDetails;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  public cancel() {

  }

  public save() {

  }
}
