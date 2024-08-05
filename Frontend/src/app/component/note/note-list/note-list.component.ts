import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { note } from 'src/app/model/note';
import { NoteService } from 'src/app/service/note.service';
import { NoteDeleteComponent } from '../note-delete/note-delete.component';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { category } from 'src/app/model/category';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {
  dataSource: MatTableDataSource<note> = new MatTableDataSource();
  list: note[] = [];
  displayedColumns: string[] = ['id_note', 'title', 'content', 'listcategory','creation date','modification date','archived','actions',];

  activeNotes: note[] = [];
  archivedNotes: note[] = [];
  showArchived: boolean = false;
  categoryTitle: string = '';
  categories: category[]=[];

  private idnote:number=0;

  constructor(private nS: NoteService, private dialog: MatDialog, private router: Router, private cS:CategoryService) {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadCategories();
    this.loadNotes();
    this.clearFilters();
    this.nS.getConfirmDeletion().subscribe(data => {
      data == true ? this.delete(this.idnote) : false;
    });

    this.nS.getlist().subscribe(() => {
      this.loadNotes();
    });
  }
  confirm(id_note: number) {
    this.idnote = id_note;
    this.dialog.open(NoteDeleteComponent);
  }
  delete(id_note: number) {
    this.nS.delete(id_note).subscribe(() => {
      this.nS.list().subscribe(data => {
        this.nS.setlist(data);
      });
    });
  }
  loadNotes() {
    if (this.showArchived) {
      this.nS.listArchived().subscribe(notes => {
        this.dataSource = new MatTableDataSource(notes);
        this.dataSource.paginator = this.paginator;

      });
    } else {
      this.nS.listActive().subscribe(notes => {
        this.dataSource = new MatTableDataSource(notes);
        this.dataSource.paginator = this.paginator;

      });
    }
  }


  toggleArchived() {
    this.showArchived = !this.showArchived;
    this.loadNotes();
  }

  archive(id: number) {
    this.nS.archive(id).subscribe(() => {
      this.loadNotes();
    });
  }

  unarchive(id: number) {
    this.nS.unarchive(id).subscribe(() => {
      this.loadNotes();
    });
  }

  edit(id_note: number): void {
    const note = this.dataSource.data.find(n => n.id_note === id_note);
    if (note && note.isarchived) {
      if (window.confirm('Editing this note will unarchive it. ¿Do you agree?')) {
        this.router.navigate(['notes/edit', id_note]);
      }
    } else {
      this.router.navigate(['notes/edit', id_note]);
  }
  }

  //////////////////////////////////////////////////////////////////////////////

  loadCategories() {
    this.cS.list().subscribe(categories => {
      this.categories = categories;
    });
  }

  applyCategoryFilter() {
    if (this.showArchived) {
      this.nS.listArchivedNotesByCategory(this.categoryTitle).subscribe(notes => {
        this.dataSource = new MatTableDataSource(notes);
        this.dataSource.paginator = this.paginator;
      });
    } else {
      this.nS.listActiveNotesByCategory(this.categoryTitle).subscribe(notes => {
        this.dataSource = new MatTableDataSource(notes);
        this.dataSource.paginator = this.paginator;
      });
    }
  }
  clearFilters() {
    this.categoryTitle = '';
    this.loadNotes();
  }

}
