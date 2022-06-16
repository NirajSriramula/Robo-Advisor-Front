import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-investor_questionnaire',
  templateUrl: './investor_questionnaire.component.html',
  styleUrls: ['./investor_questionnaire.component.scss'],
})
export class InvestorQuestionnaireComponent implements OnInit {
  questions = [{id:0,question:"What is your name"},{id:1,question:"How much would you want"}]
  sportsList = [
    [{
      id:1,
      name:'sport',
      value:'Option  1',
      label:'Option  1'
    },{
      id:2,
      name:'sport',
      value:'Option  2',
      label:'Option  2'
    },{
      id:3,
      name:'sport',
      value:'Option  3',
      label:'Option  3'
    },{
      id:4,
      name:'sport',
      value:'Option 4',
      label:'Option 4'
    }],[{
      id:5,
      name:'sport',
      value:'Options 1',
      label:'Options  1'
    },{
      id:6,
      name:'sport',
      value:'Options  2',
      label:'Options  2'
    },{
      id:7,
      name:'sport',
      value:'Options  3',
      label:'Options  3'
    },{
      id:8,
      name:'sport',
      value:'Options 4',
      label:'Options 4'
    }]
  ]

  myform = new FormGroup({
    sport: new FormControl('', Validators.required),
  });
  map = new Map();
  constructor(){}
  onclicks(ans:number,question:number){
      this.map.set(question,ans-1);
      console.log(ans);
  }
  get f(){
    return this.myform.controls;
  }
  
  submit(){
    var i:number;
    let risk = 0;
    let options = 4;
    for(i=0;i<this.questions.length;i++){
      risk= risk + (this.map.get(this.questions[i].id))%(options);

    }
    risk/=this.questions.length;
    risk/=(options-1);
    console.log(risk);}
  
  ngOnInit(): void {
  }
}
