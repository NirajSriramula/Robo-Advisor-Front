import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public name = '';
  public role = '';
  searchForm = new FormGroup({
    searchText: new FormControl('', []),
  });
  animal: any;
  constructor(private router: Router, private authService: AuthService,public dialog: MatDialog) {}
  get searchText() {
    return this.searchForm.get('searchText')?.value;
  }
  
  ngOnInit(): void {
    this.name = "Niraj";
  }
  Logout() {
    localStorage.removeItem('token');
    AuthService.role = '';
    this.router.navigate(['auth', 'signin']);
  }
}
