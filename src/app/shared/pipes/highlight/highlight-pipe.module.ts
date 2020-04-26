import { HighlightSearchPipe } from './highlight.pipe';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
		HighlightSearchPipe
	],
	exports: [
		HighlightSearchPipe
	]
})

export class HighlightPipeModule { }