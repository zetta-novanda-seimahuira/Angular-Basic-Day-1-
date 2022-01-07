import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CommentComponent } from './comment/comment.component';



@NgModule({
  declarations: [
    ContentComponent,
    CommentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentComponent
  ]

})
export class ContentModuleModule { }
