import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: "notes", component: NoteViewComponent },
  { path: "notes/:id", component: NoteEditComponent },
  { path: "register-user", component: RegisterFormComponent }, 
  { path: "", redirectTo: "/notes", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
