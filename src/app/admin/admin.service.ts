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
  postCampaign(
    location: string,
    title: string,
    summary: string,
    content: string,
    startDate: string,
    endDate: string,
    adUrl: string,
    category: string
  ) {
    let token: string = localStorage.getItem('token') || '';
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    const url = `${this.serverUrl}/ad`;
    console.log('here');
    return this.http.post(
      url,
      {
        location,
        title,
        summary,
        content,
        startDate,
        endDate,
        adUrl,
        category,
      },
      {
        headers: headers,
      }
    );
  }
  targetedUsers(location: string, category: string) {
    let token: string = localStorage.getItem('token') || '';
    const url = `${this.serverUrl}/ad/countPeopleForCampaign?location=${location}&category=${category} `;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this.http.get(url, { headers });
  }

  // To get clicked component
  MostClicked(){
    let token: string = localStorage.getItem('token') || '';
    const url = `${this.serverUrl}/analytics/topsearchedbooks`;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this.http.get(url, {headers});  
  }

  // To get Favourite component
  MostFavourite(){
    let token: string = localStorage.getItem('token') || '';
    const url = `${this.serverUrl}/analytics/topfavouritebooks`;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this.http.get(url, {headers});  
  }
  // To get Ordered component
  MostOrdered(){
    let token: string = localStorage.getItem('token') || '';
    const url = `${this.serverUrl}/analytics/toporderedbooks`;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this.http.get(url, {headers});  
  }

  // To get Registered component
  MostRegistered(){
    let token: string = localStorage.getItem('token') || '';
    const url = `${this.serverUrl}/analytics/topregisteredads`;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this.http.get(url, {headers});  
  }

  // To get total no of users so far
  TotalCount() {
    let token: string = localStorage.getItem('token') || '';
    const url = `${this.serverUrl}/user/countOfTotalUsers `;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this.http.get(url, {headers});  
  }

  // To get pie chart
  countByPrefType() {
    let token: string = localStorage.getItem('token') || '';
    const url = `${this.serverUrl}/user/countBasedOnCategory`;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this.http.get(url, {headers});
  }

  // To get a line chart - Get user count based on registered date
  getCountByRegisDate() {
    let token: string = localStorage.getItem('token') || '';
    const url = `${this.serverUrl}/user/countBasedOnRegisteredDate`;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this.http.get(url, {headers});
  }

}
