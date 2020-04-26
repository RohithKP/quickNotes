import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchNotes'
})
export class NoteSearchPipe implements PipeTransform {
    transform(items: Array<any>, searchTerm: string): Array<any> {
        if (!searchTerm) { return items; }
        return items.filter(item => {
            const title = (item.title && item.title).toLowerCase();
            const content = (item.content && item.content).toLowerCase();
            return content.includes(searchTerm) || title.includes(searchTerm)
        });
    }
}