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

}
