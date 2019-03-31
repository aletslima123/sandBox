import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})

export class DynamicTableComponent implements OnInit {
  @Input() elementData: Object[];
  @Input() displayedColumns: string[];
  columnsToDisplay: string[];
  data: Object[];


  constructor() { }

  ngOnInit() {
    this.data = this.elementData;
    this.columnsToDisplay = this.displayedColumns.slice();
  }
}
