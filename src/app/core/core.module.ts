import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PostService]
})
export class CoreModule { }
