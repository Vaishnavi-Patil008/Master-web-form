import { Component, Input, OnInit } from '@angular/core';
 import { Master } from '../Model/Master';
 import { HttpClient } from '@angular/common/http';

 @Component({
 selector: 'app-master',
 templateUrl: './master.component.html',
 styleUrls: ['./master.component.css']
 })
export class MasterComponent implements OnInit{
    @Input() EditID:number=0;
  obj : Master = new Master();
  Catagory : any;
  Subcat: any=[];
  subcatagory: any=[];
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.clear();
    this.loadCatagory();
    this.getsubcatagory();
    //this.loadsubcatagory();
  }
  loadCatagory():void{
    debugger
    this.http.get("https://localhost:44383/api/Catagory/getCatagory").subscribe((result:any)=>{
      this.Catagory = result;
    });
  }
  // loadsubcatagory():void{
  //   debugger
  //   this.http.get("https://localhost:44383/api/Catagory/getCatagory").subscribe((result:any)=>{
  //     this.Catagory = result;
  //   });
  // }
  getsubcatagory():void{
    debugger
    this.http.get("https://localhost:44383/api/Catagory/getSubcatfromCat?Catagory="+this.obj.Sub_Catagory).subscribe((result:any)=>{
      this.Subcat = result.data;
    });
  }
  clear(){
    this.obj = new Master();
  }
  save():void{
    debugger;
    if(this.EditID == 0)
    {
      this.http.post("https://localhost:44383/api/master/add",this.obj).subscribe(
        (data)=>{
          alert('record saved succefully');
          this.clear();
        }
        )
    }
  }
  
  }
  



