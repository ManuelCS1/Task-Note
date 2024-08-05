import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { CategoryDeleteComponent } from '../category-delete/category-delete.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  list: category[] = [];
  dataSource: MatTableDataSource<category> = new MatTableDataSource();
  displayedColumns: string[] = ['id_category', 'title', 'actions']
  private idcategory: number = 0;

  constructor(private cS: CategoryService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.cS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.cS.getlist().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cS.getConfirmDeletion().subscribe(data => {
      data == true ? this.delete(this.idcategory) : false;
    });
  }
  confirm(id_category: number) {
    this.idcategory = id_category;
    this.dialog.open(CategoryDeleteComponent);
  }
  delete(id_category: number) {
    this.cS.delete(id_category).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setlist(data);
      });
    });
  }

}
