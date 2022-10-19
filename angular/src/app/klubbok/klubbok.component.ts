import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Klub} from "interface_klub.ts"
// @ts-ignore
import {Member} from "interface_member.ts"
// @ts-ignore
import {Object} from "interface_object.ts"
// @ts-ignore
import {Obj_Mem} from "interface_obj_mem.ts"
// @ts-ignore
import {Klub_Mem} from "interface_klub_mem.ts"
import club from "../club.json";
import member from "../member.json";
import object from "../object.json";


   
@Component({
  selector: 'app-klubbok',
  templateUrl: './klubbok.component.html',
  styleUrls: ['./klubbok.component.css']
})


  
export class KlubbokComponent implements OnInit {
  
  klubok:Klub[]=club;
  members:Member[]=member;
  objects:Object[]=object;

  o:Object={
    id:NaN,
    member_id:NaN,
    name:'',
  }


  
  teszt:Klub_Mem[]=[];

  constructor() {

    for(let i = 0;i<this.klubok.length;i++)
    {

      var temp:Klub_Mem={
        obj_mem:[],
        klub:this.klubok[i]
      }
        for(let j = 0;j<this.members.length;j++)
        {
          
          if(this.klubok[i].id == this.members[j].club_id)
          {
            var temp0:Obj_Mem={
              member:this.members[j],
              object:this.o,
            }
            for (let x=0; x<this.objects.length;x++)
            {
              if(this.members[j].id==this.objects[x].member_id)
              {
                temp0.object=this.objects[x]
              }
            }
            temp.obj_mem.push(temp0);

          }
        }
        this.teszt.push(temp)


      }
      
    
    }

    ngOnInit(): void {}
                    
  

}









