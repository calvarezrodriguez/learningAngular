import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './component/board/board.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ConfigComponent } from './component/config/config.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfigGuard } from './guards/config.guard';

const routes: Routes = [
  { path: '', component: BoardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [ConfigGuard],
  },
  { path: 'config', component: ConfigComponent, canActivate: [AuthGuard] },
  {
    path: 'client/edit/:id',
    component: EditClientComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
