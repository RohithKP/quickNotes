import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject$ = new Subject();

  constructor() { }

  public emit(event) {
    this.subject$.next(event);
  }

  on(eventName: string, action: any) {
    return this.subject$.pipe(
      filter((e) => e['name'] === eventName),
      map((e) => e['value'])
    ).subscribe(action)
  }
}
