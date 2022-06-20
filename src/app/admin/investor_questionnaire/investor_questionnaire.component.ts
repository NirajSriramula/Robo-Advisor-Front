import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-investor_questionnaire',
  templateUrl: './investor_questionnaire.component.html',
  styleUrls: ['./investor_questionnaire.component.scss'],
})
export class InvestorQuestionnaireComponent implements OnInit {
  questions = [{id:0,question:"Description of degree of risk willing to take in a quantitative form"},
  {id:1,question:"Investment time horizon"},
  {id:2,question:"Investment plan/goal and expected return from investment"},
  {id:3,question:"Percentage of income/net worth  for investment"},
  {id:4,question:"Earning capacity of an investor"},
  {id:5,question:"Rate of investment knowledge & experience"}]
  dummy = 'What is the age group of investor?'
  sportsList = [[
    {
      id:1,
      name:'sport',
      value:' Very Low',
      label:'Very Low'
    },{
      id:2,
      name:'sport',
      value:'Low',
      label:'Low'
    },{
      id:3,
      name:'sport',
      value:'Medium',
      label:'Medium'
    },{
      id:4,
      name:'sport',
      value:'High',
      label:'High'
    },{
      id:5,
      name:'sport',
      value:'Very high',
      label:'Very high'
    }]
  ]

  myform = new FormGroup({
    sport: new FormControl('', Validators.required),
  });
  map = new Map();
  isCorrect = true;
  constructor(private adminService:AdminService,private router: Router){}
  onclicks(ans:number,question:number){
      this.map.set(question,(ans-1));
      console.log(ans);
  }
  get f(){
    return this.myform.controls;
  }
  
  submit(){
    var i:number;
    let risk = 0;
    let count = 0;
    let options = 5;
    for(i=0;i<this.questions.length;i++){
      if(!this.map.has(this.questions[i].id)){
        this.isCorrect = false;
      }
      else{
        count++;
      }
      let option = (this.map.get(this.questions[i].id));
      risk= risk + (0.1+(0.2)*(option));
    }
    if(count==this.questions.length){this.isCorrect = true;}
    risk/=this.questions.length;
    console.log(risk);
   if(this.isCorrect){this.adminService.update_risk(risk,""+localStorage.getItem("sessionID")).subscribe((response)=>{ this.router.navigate(['/admin/dashboard']);},(error)=>{console.log(error);});}
  }
  
  ngOnInit(): void {
  }
}
