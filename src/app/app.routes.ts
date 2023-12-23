import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { VideoContainerComponent } from './video-container/video-container.component';
import { LinkContainerComponent } from './link-container/link-container.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: "video", component: VideoContainerComponent},
  {path: "link", component: LinkContainerComponent}
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

export const RoutingComponents = [
  VideoContainerComponent,
  LinkContainerComponent
]
