import { AdminService } from '../../admin.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { environment } from 'src/environments/environment';

Chart.register(...registerables);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
   
  }
}
