import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './people/person/person.component';
import { FormComponent } from './people/form/form.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/add', component: FormComponent },
  { path: 'people/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
