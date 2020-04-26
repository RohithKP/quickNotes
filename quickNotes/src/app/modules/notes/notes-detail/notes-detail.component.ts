import { NotesDetailService } from './notes-detail.service';
import { EventBusService } from './../../../shared/services/event-bus.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss'],
})
export class NotesDetailComponent implements OnInit {
  @Input() noteDetails;

  constructor(
    private eventBusService: EventBusService,
    private detailDataService: NotesDetailService
  ) { }

  ngOnInit(): void {
  }


  public save() {
    this.detailDataService.saveNote(this.noteDetails).subscribe(() => {
      this.eventBusService.emit({
        name: 'saved',
        value: this.noteDetails
      })
    }
    );
  }

  public cancel() {
    this.eventBusService.emit({
      name: 'cancel',
      value: this.noteDetails
    })
  }
}
