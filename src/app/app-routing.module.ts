import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'batches', component: BatchListComponent },
  { path: 'batches/:id', component: BatchDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
