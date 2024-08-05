import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './component/note/note.component';
import { NoteInsertComponent } from './component/note/note-insert/note-insert.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryInsertComponent } from './component/category/category-insert/category-insert.component';

const routes: Routes = [
  {
    path: 'notes', component: NoteComponent, children: [
      { path: 'new', component: NoteInsertComponent },
      { path: 'edit/:id_note', component: NoteInsertComponent }
    ]
  },
  {
    path: 'category', component: CategoryComponent, children: [
      { path: 'new', component: CategoryInsertComponent },
      { path: 'edit/:id_category', component: CategoryInsertComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
