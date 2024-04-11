import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  note_url: string = "http://localhost:3000/notes";

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.note_url);
  }

  addNote(note:Note): Observable<Note>{
    return this.http.post<Note>(this.note_url, note);
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.note_url}/${id}`);
  }

  modifyNote(id?:number,note?: Note): Observable<Note> {
    return this.http.put<Note>(`${this.note_url}/${id}`, note);
  }

  deleteNote(id?:number):Observable<Note>{
    return this.http.delete<Note>(`${this.note_url}/${id}`);
  }
}
