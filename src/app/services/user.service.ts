import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_url: string = "http://localhost:3000/users";

  // note_url: string = "http://localhost:3000/notes";
  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<User> {
    return this.http.post<User>(this.user_url, user);
  }

  

}