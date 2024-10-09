import { Component, Input, OnInit } from '@angular/core';
import { Catagory } from '../Model/Catagory';
import { HttpClient } from '@angular/common/http';
import { Subcat } from '../Model/subcat';

@Component({
  selector: 'app-subcatagory',
  templateUrl: './subcatagory.component.html',
  styleUrls: ['./subcatagory.component.css']
})
export class SubcatagoryComponent implements OnInit {
  @Input() EditID:number=0;
  obj : Subcat = new Subcat();
  Catagory : any;
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.clear();
    this.loadCatagory();
  }
  loadCatagory():void{
    this.http.get("https://localhost:44383/api/Catagory/getCatagory").subscribe((result:any)=>{
      this.Catagory = result;
    });
  }
  clear(){
    this.obj = new Subcat();
  }
  save():void{
    debugger;
    if(this.EditID == 0)
    {
      this.http.post("https://localhost:44383/api/Sub/addsub1",this.obj).subscribe(
        (data)=>{
          alert('record saved succefully');
          this.clear();
        }
        )
    }
  }
  
  }


