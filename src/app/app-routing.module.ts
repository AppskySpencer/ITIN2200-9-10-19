import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaLogComponent } from './idea-log/idea-log.component';


const routes: Routes = [
  {
    path: '',
    component: IdeaLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
