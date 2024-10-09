import { Component, Input, OnInit } from '@angular/core';
import { Master } from '../Model/Master';
import { HttpClient } from '@angular/common/http';
import { Catagory } from '../Model/Catagory';


@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit{
  @Input() EditID:number=0;
  obj : Catagory = new Catagory();
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
    this.obj = new Catagory();
  }
  save():void{
    debugger;
    if(this.EditID == 0)
    {
      this.http.post("https://localhost:44383/api/Catagory/addcat",this.obj).subscribe(
        (data)=>{
          alert('record saved succefully');
          this.clear();
        }
        )
    }
  }
  
  }



