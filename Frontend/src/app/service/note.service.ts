import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { note } from '../model/note';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private url = `${base_url}/notes`;
  private listnote=new Subject<note[]>;


  private ConfirmDeletion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<note[]>(this.url);
  }


  insert (nt:note){
    return this.http.post(this.url,nt);
  }
  getlist(){
    return this.listnote.asObservable();
  }
  setlist(newlist:note[]){
    this.listnote.next(newlist);
  }


  listId(id: number) {
    return this.http.get<note>(`${this.url}/${id}`);
  }

  update(n: note) {
    return this.http.put(this.url, n);

  }

  delete(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDeletion() {
    return this.ConfirmDeletion.asObservable();
  }
  setConfirmDeletion(state: Boolean) {
    this.ConfirmDeletion.next(state);
  }
///////////////////////////////////////////////////////////////////
  listActive() {
    return this.http.get<note[]>(`${this.url}/active`);
  }

  listArchived() {
    return this.http.get<note[]>(`${this.url}/archived`);
  }

  archive(id: number) {
    return this.http.patch(`${this.url}/${id}/archive`, {});
  }

  unarchive(id: number) {
    return this.http.patch(`${this.url}/${id}/unarchive`, {});
  }

  ///////////////////////////////////////////////////////
   listActiveNotesByCategory(categoryTitle: string): Observable<note[]> {
    return this.http.get<note[]>(`${this.url}/filter/active`, {
      params: {
        categoryTitle: categoryTitle
      }
    });
  }

  listArchivedNotesByCategory(categoryTitle: string): Observable<note[]> {
    return this.http.get<note[]>(`${this.url}/filter/archived`, {
      params: {
        categoryTitle: categoryTitle
      }
    });
  }
}
