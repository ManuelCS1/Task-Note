import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit{

  constructor(private nS: NoteService,
    private dialogRef: MatDialogRef<NoteDeleteComponent>){  }
    ngOnInit(): void { }
    confirm(state: boolean) {
      this.nS.setConfirmDeletion(state);
      this.dialogRef.close();
    }

}
