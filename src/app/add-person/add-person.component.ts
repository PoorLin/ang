import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Person } from '../person';
import { error } from 'console';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit{
  constructor(private http:HttpClient,private router:Router){

  }
  ngOnInit(): void {
    
  }

 onAddPerson(data:any){
  console.log(data.firstname);
  console.log(data.lastname);
  console.log(data.street);
  console.log(data.city);
 let person = new Person(undefined,data.firstname,data.lastname,data.street,data.city,{self:{href:""}}); 
 let baseURL = "http://localhost:8080/eBiz/api/persons"
 this.http.post(baseURL,person).subscribe({
  next:(data)=>{console.log("Person created successfully",data)}
  ,error:(error)=>{console.log(error)},complete:()=>{
    console.log();
    this.router.navigate(['list-persons']);
  }}
)
 }
}
