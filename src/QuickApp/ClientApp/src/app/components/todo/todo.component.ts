import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../services/animations';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [fadeInOut]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
