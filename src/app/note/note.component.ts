import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input()
  note?: Note;


  constructor(private noteService: NoteService,
    private routeService: RouterService) { }

  ngOnInit(): void {

  }

  delete() {
    if (this.note?.id) {
      this.noteService.deleteNote(this.note?.id).subscribe(data => {
        this.routeService.navigateToNotesView();
        alert('Note deleted successfully')
      })
    }
  }
}
