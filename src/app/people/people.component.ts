import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../mock-people';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'last_name', 'm_last_name', 'adress', 'phone'];
  people = new MatTableDataSource(PEOPLE);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.people.filter = filterValue.trim().toLowerCase();
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})

export class DialogElementsExampleDialog {}
