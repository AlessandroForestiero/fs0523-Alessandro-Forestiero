import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

form!:FormGroup;



constructor(private fb:FormBuilder){}

ngOnInit(){
  this.form = this.fb.group({
  nome:this.fb.control(null,[Validators.required]),
  cognome:this.fb.control(null,[Validators.required]),
  password:this.fb.control(null,[Validators.required]),
  confermaPassword:this.fb.control(null,[Validators.required]),
  genere:this.fb.control(null,[(Validators.required)]),
  img:this.fb.control(null,[(Validators.required)]),
  bio:this.fb.control(null,[(Validators.required)]),
  username:this.fb.control(null,[(Validators.required)])
 }
  )
 }
// ngOnInit(){
//   this.form = new FormGroup({
//   nome:new FormControl(null,[Validators.required]),
//   cognome:new FormControl(null,[Validators.required]),
//   password:new FormControl(null,[Validators.required]),
//   confermaPassword:new FormControl(null,[Validators.required]),
//   genere:new FormControl(null,[(Validators.required)]),
//   img:new FormControl(null,[(Validators.required)]),
//   bio:new FormControl(null,[(Validators.required)]),
//   username:new FormControl(null,[(Validators.required)])
//  }
//   )
//  }

send(){
  console.log(this.form.value);

}

inviaForm(myform:NgForm){
  console.log(myform.value);

}

}


