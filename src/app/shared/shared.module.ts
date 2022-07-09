import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContentComponent } from './card-content/card-content.component';
import { ContentComponent } from './card-content/content/content.component';

@NgModule({
  declarations: [CardContentComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  exports: [CardContentComponent]
})
export class SharedModule { }
