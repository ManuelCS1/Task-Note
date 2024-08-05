import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { category } from 'src/app/model/category';
import { note } from 'src/app/model/note';
import { CategoryService } from 'src/app/service/category.service';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-note-insert',
  templateUrl: './note-insert.component.html',
  styleUrls: ['./note-insert.component.css']
})
export class NoteInsertComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  note: note = new note()
  message: string = ""
  edit: boolean = false
  id_note: number = 0;
  categories: category[] = [];
  idCategoryselect: number []= [];

  constructor(private nS: NoteService,
    private router: Router,
    private route: ActivatedRoute, private cS:CategoryService) {
  }

  ngOnInit(): void {

      // Cargar las categorías
  this.cS.list().subscribe(data => {
    this.categories = data;
  }, error => {
    console.error("Error loading categories: ", error);
  });

    this.route.params.subscribe((data: Params) => {
      this.id_note = data['id_note'];
      this.edit = data['id_note'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id_note: new FormControl(),
      title: new FormControl(),
      content: new FormControl(),
      category: new FormControl()
    });
  }
  accept(): void {
    this.note.id_note = this.form.value['id_note'];
    this.note.title = this.form.value['title'];
    this.note.content = this.form.value['content'];
    this.note.categories = this.form.value['category'].map((id: number) => {
      let c = new category();
      c.id_category = id;
      return c;
    });

    if (this.idCategoryselect.length > 0) {
      this.nS.insert(this.note).subscribe(() => {
        this.nS.list().subscribe(data => {
          this.nS.setlist(data);
        })
      })
      this.router.navigate(['notes']);
    }

    if (this.form.value['title'].length > 0 && this.form.value['content'].length > 0) {
      if (this.edit) {
        this.note.createddate = this.note.createddate;
        this.note.lastmodifieddate = new Date(Date.now());

        this.nS.update(this.note).subscribe(() => {
          this.nS.list().subscribe(data => {
            this.nS.setlist(data);
          });
        });
      } else {
        this.note.createddate = new Date(Date.now());
        this.note.lastmodifieddate = new Date(Date.now());
        this.note.isarchived = false;

        this.nS.insert(this.note).subscribe(() => {
          this.nS.list().subscribe(data => {
            this.nS.setlist(data);
          })
        })
      }
      this.router.navigate(['notes']);
    } else {
      this.message = "Fill in the required values";
    }
  }

    init() {
      if (this.edit) {
        this.nS.listId(this.id_note).subscribe(data => {
          this.form = new FormGroup({
            id_note: new FormControl(data.id_note),
            title: new FormControl(data.title),
            content: new FormControl(data.content),
            category: new FormControl(data.categories.map((c: category) => c.id_category))
          });
        }, error => {
          console.error("Error loading note data: ", error);
        });
      }
    }
  }


