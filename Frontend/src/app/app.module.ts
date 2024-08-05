import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteComponent } from './component/note/note.component';
import { NoteListComponent } from './component/note/note-list/note-list.component';
import { NoteInsertComponent } from './component/note/note-insert/note-insert.component';
import { NoteDeleteComponent } from './component/note/note-delete/note-delete.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { CategoryComponent } from './component/category/category.component';
import { CategoryListComponent } from './component/category/category-list/category-list.component';
import { CategoryInsertComponent } from './component/category/category-insert/category-insert.component';
import { CategoryDeleteComponent } from './component/category/category-delete/category-delete.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteListComponent,
    NoteInsertComponent,
    NoteDeleteComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryInsertComponent,
    CategoryDeleteComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
