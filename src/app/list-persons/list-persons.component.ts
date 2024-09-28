import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { error } from 'console';
import { getHashes } from 'crypto';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-persons',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './list-persons.component.html',
  styleUrl: './list-persons.component.css'
})
export class ListPersonsComponent implements OnInit{
  persons:Person[] =[]
  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    let baseUrl = "http://localhost:8080/eBiz/api/persons";
    this.http.get<PersonResponse>(baseUrl).subscribe({next:(data)=>{this.persons = data._embedded.persons},
   error:(error)=>{
    console.error("loading  persons data error")
   },
   complete:()=>{
      this.persons.forEach(person=>{
        let href = person._links.self.href;
        let index = href.lastIndexOf("/");
        person.id = href.substring(index+1);
      })
   }
  }
    )   //方法後面<> 為定義回傳型別
  }

}

interface PersonResponse{
  _embedded:{
    persons:Person[],
    links:{
      self:{href:string },
      profile:{ href:string}
    }
  }
}
