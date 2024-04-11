import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from 'src/app/note/note.component';
import { SearchComponent } from 'src/app/search/search.component';
import { NoteService } from 'src/app/services/note.service';
import { NoteServiceStub } from './noteServiceStub';

import { NoteViewComponent } from 'src/app/note-view/note-view.component';

import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('NoteViewComponent', () => {
  let component: NoteViewComponent;
  let fixture: ComponentFixture<NoteViewComponent>;
  let noteService: NoteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteViewComponent, SearchComponent,  NoteComponent],
      imports: [ FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, NoopAnimationsModule, MatCardModule,MatSnackBarModule ],
      providers: [{ provide: NoteService, useClass: NoteServiceStub },
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of({ get: (id: any) => 301 })
          }
        }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteViewComponent);
    noteService = fixture.debugElement.injector.get(NoteService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
