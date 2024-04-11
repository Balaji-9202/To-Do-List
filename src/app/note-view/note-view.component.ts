import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  showAddNote: boolean = false;
  notes: Note[] = [];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: data => {
        this.notes = data;
      },
      error: error => {
        alert("Failed to Fetch Notes Due to Server Error !!");
      }
    });
  }

  searchTitle($event: string) {
    this.noteService.getNotes().subscribe({
      next: data => {
        if ($event == '' || !$event) {
          this.notes = data;
        }
        else {
          this.notes = data;
          this.notes = this.notes.filter(note => note.title?.includes($event));
        }

      },
      error: error => {
        alert("Failed to Fetch Notes Due to Server Error !!");
      }
    });
  }

  onNoteAdded($event: any) {
    this.notes.push($event);
  }

  toggleAddNote() {
    this.showAddNote = !this.showAddNote;
  }

}

