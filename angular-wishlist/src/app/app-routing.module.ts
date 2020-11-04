import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
