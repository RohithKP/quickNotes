import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesDetailService {

  constructor() { }

  public saveNote(note) {
    const lsData = this.getLsData();
    const itemIndex = lsData.findIndex(item => item.id === note.id);
    if(itemIndex > -1) {
      lsData[itemIndex] = note;
    } else {
      lsData.unshift(note);
    }
    window.localStorage.setItem('quickNotes', JSON.stringify({ data: lsData }));
    return of('success');
  }

  private getLsData() {
    const lsData: any = window.localStorage.getItem('quickNotes');
    return lsData ?  JSON.parse(lsData).data: [];
  }
}
