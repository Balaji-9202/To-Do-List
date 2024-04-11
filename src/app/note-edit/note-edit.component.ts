import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service'; // Import your NoteService
import { Note } from '../models/note';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  // selectedNote?: Note;
  // id?:number;

  constructor(private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private routeService: RouterService) { }

  note: Note = { title: '', content: '' };
     
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;

      this.noteService.getNote(+id).subscribe(data => {
        this.note = data;
      });
    });
  }

editNote() {
  this.noteService.modifyNote(this.note?.id, this.note).subscribe(data => {
    this.note = data;
    this.routeService.navigateToNotesView();
  })
}
  
}
