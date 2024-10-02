import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.students = this.dataService.getStudents();
  }
}
