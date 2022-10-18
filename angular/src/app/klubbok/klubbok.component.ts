import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import clubb from "../club.json";
import member from "../member.json";
import object from "../object.json";


interface Klubb
{
  id:Number;
  name: String;

}

interface Member
{
  id:Number;
  name: String;
  gender: Boolean;
  club_id:Number;
}

interface Object
{
  id:Number;
  name: String;
  member_id:Number;
}


interface Teszt
{
    szemely:Member[];
    klubb:Klubb;

}
   
@Component({
  selector: 'app-klubbok',
  templateUrl: './klubbok.component.html',
  styleUrls: ['./klubbok.component.css']
})


  


export class KlubbokComponent implements OnInit {
  
  teszt:Teszt[]=[];

  constructor() {


    for(let i = 0;i<this.klubbok.length;i++)
    {
      var temp0:Klubb=this.klubbok[i]

       var temp:Teszt=
       {
        szemely:[],
        klubb:temp0

       };
       
       for(let j = 0;j<this.members.length;j++)
       {
        
        if(this.klubbok[i].id == this.members[j].club_id)
        {
          
          temp.szemely.push(this.members[j])
          
        }
       }

       this.teszt.push(temp);
    }
   }

  ngOnInit(): void {
  }


  klubbok:Klubb[]=clubb;
  members:Member[]=member;
  objects:Object[]=object;



 
}









