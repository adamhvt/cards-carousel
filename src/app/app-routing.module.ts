import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleProfileComponent } from './components/simple-profile/simple-profile.component';

const routes: Routes = [
  { path: 'simple', component: SimpleProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
