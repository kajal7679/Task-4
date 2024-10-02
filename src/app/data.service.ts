import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  students = [
    { id: 1, name: 'John Doe', batch: 'Batch A' },
    { id: 2, name: 'Jane Smith', batch: 'Batch B' },
    { id: 3, name: 'Alice Johnson', batch: 'Batch A' }
  ];

  
  batches = [
    { id: 1, name: 'kajal', description: 'Batch A student' },
    { id: 2, name: 'viraj', description: 'Batch B student' },
    { id: 1, name: 'adii', description: 'Batch A student' },
    { id: 2, name: 'appu', description: 'Batch B student' }
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(student => student.id === id);
  }

  getBatches() {
    return this.batches;
  }

  getBatchById(id: number) {
    return this.batches.find(batch => batch.id === id);
  }
}
