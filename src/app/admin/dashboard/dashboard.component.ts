import { AdminService } from '../admin.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {
  investedAmount = 0;
  animal: string | undefined;
  name: string | undefined;
  openDialog() {
    console.log("Inside openDialog");
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  constructor(private adminService: AdminService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.investedAmount = 100
  }
}
