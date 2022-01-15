import { DataRowComponent } from 'src/app/common/data-row/data-row.component';
import { User } from 'src/app/model/user';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList:User[] = [];

  @Output() selectClick:EventEmitter<User> = new EventEmitter();

  @Output() updateClick:EventEmitter<User> = new EventEmitter();

  @Output() deleteClick:EventEmitter<User> = new EventEmitter();

  onSelectClick():void{
    this.selectClick.emit();
  }

  onUpdateClick():void{
    this.updateClick.emit();
  }

  onDeleteClick():void {
    this.deleteClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
