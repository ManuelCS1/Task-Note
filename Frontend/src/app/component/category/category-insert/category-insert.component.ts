import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-insert',
  templateUrl: './category-insert.component.html',
  styleUrls: ['./category-insert.component.css']
})
export class CategoryInsertComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  category: category = new category()
  message: string = ""
  edit: boolean = false
  id_category: number = 0;
  constructor(private cS: CategoryService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id_category = data['id_category'];
      this.edit = data['id_category'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id_category: new FormControl(),
      title: new FormControl(),
    });
  }
    accept(): void {
      this.category.id_category = this.form.value['id_category'];
      this.category.title = this.form.value['title'];

      if (this.form.value['title'].length ) {
        if (this.edit) {

          this.cS.update(this.category).subscribe(() => {
            this.cS.list().subscribe(data => {
              this.cS.setlist(data);
            });
          });
        } else {
          this.cS.insert(this.category).subscribe(() => {
            this.cS.list().subscribe(data => {
              this.cS.setlist(data);
            })
          })
        }
        this.router.navigate(['category']);
      } else {
        this.message = "Fill in the required values";
      }
    }
    init() {
      if (this.edit) {
        this.cS.listId(this.id_category).subscribe(data => {
          this.form = new FormGroup({
            id_category: new FormControl(data.id_category),
            title: new FormControl(data.title),
          });
        }, error => {
          console.error("Error loading category data: ", error);
        });
      }
    }
}
