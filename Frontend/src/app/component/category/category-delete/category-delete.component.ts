import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  constructor(private cS: CategoryService,
    private dialogRef: MatDialogRef<CategoryDeleteComponent>){  }
    ngOnInit(): void { }
    confirm(state: boolean) {
      this.cS.setConfirmDeletion(state);
      this.dialogRef.close();
    }

}
