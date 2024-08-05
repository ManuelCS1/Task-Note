import { category } from "./category";

export class note{
  id_note: number=0;
  title: string="";
  content: string="";
  createddate: Date=new Date(Date.now());
  lastmodifieddate: Date=new Date(Date.now());
  isarchived: Boolean=false;
  categories:category[]=[];
}
