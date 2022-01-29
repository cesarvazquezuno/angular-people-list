import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PeopleComponent } from './people/people.component';

// Routes
const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: '**', component: PeopleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
