import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from './user-details';
import { Mentordetails } from './mentordetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http:HttpClient) { }

  getUser(username : String): Observable<any> {
    return this.http.get(`http://localhost:8080/api/user/loginuser/${username}`);
  }

  public saveUser(user:UserDetails) {
    return this.http.post('http://localhost:8080/api/user/save',user);

  }
  public saveMentor(mentor:Mentordetails) {
    return this.http.post('http://localhost:8080/api/mentor/save',mentor);

  }

  getMentorCurrentDetails(): Observable<any> {
    return this.http.get('http://localhost:8080/api/mentor/findcurrent');
  }

  getMentorCompletedDetails(): Observable<any> {
    return this.http.get('http://localhost:8080/api/mentor/findcompleted');
  }


  getUserCurrentDetails():Observable<any> {
    return this.http.get('http://localhost:8080/api/user/findcurrent');
  }

  getUserCompletedDetails():Observable<any> {
    return this.http.get('http://localhost:8080/api/userfindcompleted');
  }
}
