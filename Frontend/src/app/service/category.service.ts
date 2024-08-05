import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { category } from '../model/category';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 private url = `${base_url}/category`;
  private listcategory=new Subject<category[]>;


  private ConfirmDeletion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<category[]>(this.url);
  }


  insert (ct:category){
    return this.http.post(this.url,ct);
  }
  getlist(){
    return this.listcategory.asObservable();
  }
  setlist(newlist:category[]){
    this.listcategory.next(newlist);
  }


  listId(id: number) {
    return this.http.get<category>(`${this.url}/${id}`);
  }

  update(n: category) {
    return this.http.put(this.url, n);

  }

  delete(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDeletion() {
    return this.ConfirmDeletion.asObservable();
  }
  setConfirmDeletion(estado: Boolean) {
    this.ConfirmDeletion.next(estado);
  }
}
