import { AdminService } from '../admin.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {
  investedAmount = 0;
  public show:boolean = false;
  animal: string | undefined;
  name: string | undefined;
  value:any ;
  buttonName: string="Update Amount";
  conss(){
    if(this.value<0){this.value=0;}
    console.log(this.value);
  }
  openDialog(){
    this.show = !this.show;
    if(this.show){
      this.buttonName = "Change Amount";
  }
  else{
    this.openDialogue();
    this.buttonName = "Update Amount";
  }
  }
  openDialogue() {
    this.adminService.addMoney(parseInt(this.value),"" + localStorage.getItem("sessionId")).subscribe((response:any)=>{
      console.log(response);
      this.investedAmount = this.value;
      localStorage.setItem("amount",response.portfolio_value);
    });
  }
  constructor(private adminService: AdminService,public dialog: MatDialog) { }

  ngOnInit(): void {    
    this.investedAmount = 0
    if(localStorage.getItem("amount")!=null){
      this.investedAmount = parseInt("" + localStorage.getItem("amount"));
    }  
  }
}
