import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient, private router: Router) {}

  serverUrl = environment.baseUrl;
  getPredictions(user:string,sessionID:string){
    return this.http.get(this.serverUrl+'/get_prediction?user='+user+'&sessionId='+sessionID);
  }
  addMoney(amount:number,sessionId:string){
    let url = this.serverUrl + '/update_portfolio_value?portfolio_value=' + amount + '&sessionId=' + sessionId;
    return this.http.get(url);
  }
  update_risk(risk:number,sessionId:string){
    let url = this.serverUrl + '/update_risk_parameter?risk_parameter=' + risk + '&sessionId=' + sessionId;
    return this.http.get(url);
  }
  get_risk(sessionId:string){
    let url = this.serverUrl + '/get_risk_parameter?sessionId=' + sessionId;
    return this.http.get(url);
  }
}
