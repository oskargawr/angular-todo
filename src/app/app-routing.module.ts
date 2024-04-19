import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Strona główna'},
  { path: 'todo', component: TodoListComponent, title: 'Dodaj zadanie!' },
  { path: 'todo/:id', component: TodoDetailsComponent, title: 'Szczegoly zadania' },
  { path: '**', component: PageNotFoundComponent, title: '404 - Nie znaleziono strony'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
