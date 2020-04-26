import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class NotesSidebarService {

  constructor() { }

  public getAllNotesList() {
    // moking API call
    return of([
      {
        id: 1,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 2,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 3,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 4,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 5,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 6,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 7,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 8,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 9,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 10,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 11,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 12,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 13,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
      {
        id: 14,
        title: "Sample Title",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        createdOn: "2017-03-17T16:55:00Z",
        updatedOn: '2017-03-17T17:55:00Z'
      },
    ])
  }
}
