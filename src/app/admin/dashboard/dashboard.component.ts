import { AdminService } from '../admin.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {
  investedAmount = 0;
  public show:boolean = false;
  public showWith:boolean = false;
  public showError:boolean = false;
  public isEmpty:boolean = false;
  value:any ;
  withDraw:any ;
  risk:any;
  buttonName: string="Update Amount";
  btnName: string="Withdraw Money";
  conss(){
    if(this.value<0){this.value=0;}
    console.log(this.value);
  }
  conss1(){
    if(this.withDraw<0){this.withDraw=0;}
    console.log(this.withDraw);
  }
  openDialog(){
    this.show = !this.show;
    
    if(this.value==0){this.isEmpty = true;}
    else{this.isEmpty = false;}
    if(this.value==null || this.value==''){this.value = 0;}
    if(this.show){
      this.buttonName = "Change Amount";
  }
  else{
    this.openDialogue();
    this.buttonName = "Update Amount";
  }
  }
  openDialog1(){
    this.showWith = !this.showWith;
    if(this.withDraw==null || this.withDraw==''){this.withDraw = 0;}
    if(this.value< this.withDraw){
      this.showError = true;
    }
    else{
      this.showError = false;

      this.value-=this.withDraw;
      localStorage.setItem("amount",this.value);
    this.adminService.addMoney(parseInt(this.value),"" + localStorage.getItem("sessionId")).subscribe((response:any)=>{
      console.log(response);
      this.investedAmount = this.value;
      this.ngOnInit();
    });
    }

  }
  openDialogue() {
    
    if(this.value==0){this.isEmpty = true;}
    else{this.isEmpty = false;}
    localStorage.setItem("amount",this.value);
    this.adminService.addMoney(parseInt(this.value),"" + localStorage.getItem("sessionId")).subscribe((response:any)=>{
      console.log(response);
      this.investedAmount = this.value;
      this.ngOnInit();
    });
  }
  constructor(private adminService: AdminService,public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {    
    this.investedAmount = 0
    if(this.value==0){this.isEmpty = true;}
    else{this.isEmpty = false;}
    this.adminService.get_risk(""+localStorage.getItem("sessionID")).subscribe((response1:any)=>{
      console.log(response1)
          if(response1.risk_parameter>1){
            this.risk = true;
          }
    });
    if(localStorage.getItem("amount")!=null){
      this.investedAmount = parseInt("" + localStorage.getItem("amount"));
    }
  }
}
