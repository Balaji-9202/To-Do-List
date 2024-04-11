import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent {
  note: Note = {};

  @Output()
  noteAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private noteService: NoteService) { }

  addNote(noteForm:any) {
    this.noteService.addNote(this.note).subscribe({
      next: data => {
       alert('Note added successfully')
      },
      error: error => {
        alert("Failed to Add Note Due to Server Error !!");
      }
    });
  }

}
