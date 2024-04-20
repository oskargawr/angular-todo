import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ChildAComponent } from './todo-list/child-a/child-a.component';
import { ChildBComponent } from './todo-list/child-b/child-b.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Strona główna',
  },
  {
    path: 'todo',
    component: TodoListComponent,
    title: 'Dodaj zadanie!',
    children: [
      { path: 'child-a', component: ChildAComponent, title: 'Child A' },
      { path: 'child-b', component: ChildBComponent, title: 'Child B' },
    ],
  },
  {
    path: 'todo/:id',
    component: TodoDetailsComponent,
    title: 'Szczegoly zadania',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: '404 - Nie znaleziono strony',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
