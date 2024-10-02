import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {
  batches: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.batches = this.dataService.getBatches();
  }
}
