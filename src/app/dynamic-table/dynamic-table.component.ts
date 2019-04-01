import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})

export class DynamicTableComponent implements OnInit {
  @Input() elementData: Object[];
  displayedColumns: String[];
  @Input() customHeading: String[] = [];
  columnsToDisplay: String[];
  data: Object[];



  constructor() { }

  ngOnInit() {
    this.data = this.elementData;
    this.displayedColumns = Object.getOwnPropertyNames(this.elementData[0]);
    this.columnsToDisplay = this.displayedColumns.slice();
  }
}
