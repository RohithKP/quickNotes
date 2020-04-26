import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class NotesSidebarService {
  private _data = [
    {
      id: 1,
      title: "Sample Title",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2020-03-17T16:55:00",
      updatedOn: '2017-03-17T17:55:00'
    },
    {
      id: 2,
      title: "Sample Title 1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2017-03-17T16:55:00",
      updatedOn: '2020-04-26T12:55:00'
    },
    {
      id: 3,
      title: "Sample Title 2",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2020-03-17T16:55:00",
      updatedOn: '2020-03-17T17:55:00'
    },
    {
      id: 4,
      title: "Sample Title 3",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2020-03-17T16:55:00",
      updatedOn: '2020-03-17T17:55:00'
    },
    {
      id: 5,
      title: "Sample Title 4",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2020-03-17T16:55:00",
      updatedOn: '2020-03-17T17:55:00'
    },
    {
      id: 6,
      title: "Sample Title 5",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2020-03-17T16:55:00",
      updatedOn: '2020-03-17T17:55:00'
    },
    {
      id: 7,
      title: "Sample Title 6",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2020-03-17T16:55:00",
      updatedOn: '2020-03-17T17:55:00'
    },
    {
      id: 8,
      title: "Sample Title 7",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2020-03-17T16:55:00",
      updatedOn: '2017-03-17T17:55:00'
    },
    {
      id: 9,
      title: "Sample Title 8",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2017-03-17T16:55:00",
      updatedOn: '2017-03-17T17:55:00'
    },
    {
      id: 10,
      title: "Sample Title 9",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2017-03-17T16:55:00",
      updatedOn: '2017-03-17T17:55:00'
    },
    {
      id: 11,
      title: "Sample Title 10",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2017-03-17T16:55:00",
      updatedOn: '2017-03-17T17:55:00'
    },
    {
      id: 12,
      title: "Sample Title 11",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2017-03-17T16:55:00",
      updatedOn: '2017-03-17T17:55:00'
    },
    {
      id: 13,
      title: "Sample Title 12",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2017-03-17T16:55:00",
      updatedOn: '2017-03-17T17:55:00'
    },
    {
      id: 14,
      title: "Sample Title 13",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      createdOn: "2017-03-17T16:55:00",
      updatedOn: '2017-03-17T17:55:00'
    },
  ];

  constructor() {
    this.setMockData(this._data);
  }

  private setMockData(data, override?: boolean) {
    if (!window.localStorage.getItem('quickNotes') || override) {
      window.localStorage.setItem('quickNotes', JSON.stringify({ data: data }));
    }
  }

  public getAllNotesList() {
    // mocking API call
    return of(this.getLsData());
  }

  public deleteNote(id: number) {
    const listItems = this.getLsData();
    const itemIndex = listItems.findIndex((item) => item.id === id);
    if(itemIndex > -1) {
      listItems.splice(itemIndex, 1);
      this.setMockData(listItems, true);
    }
    return of(this._data);
  }

  private getLsData() {
    const lsData: any = window.localStorage.getItem('quickNotes');
    return lsData ?  JSON.parse(lsData).data: [];
  }
}
