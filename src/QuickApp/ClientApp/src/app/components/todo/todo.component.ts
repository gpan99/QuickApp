import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../services/animations';

import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { TodoService } from '../../services/todo.service';
import { TodoResponse, TodoResp} from '../../models/Todoresponse.model'
import { ConfigurationService } from '../../services/configuration.service';
import { NgFormSelectorWarning } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [fadeInOut]
})
export class TodoComponent implements OnInit {
  rows = [];
  rowsCache = [];
  columns = [];
  editing = {};
  taskEdit = {};
  isDataLoaded = false;
  loadingIndicator = true;
  formResetToggle = true;
  _currentUserId: string;
  _hideCompletedTasks = false;
  isLoading = false;
  todos: TodoResp[] =[];
    
  constructor(private alertService: AlertService, private authService: AuthService,
    private configurations: ConfigurationService, private todoService: TodoService) {
  }
  ngOnInit() {
    this.todoService.loadTodos()
      .subscribe((response: TodoResp[]) => {
        this.todos = response;
      },
        (err: any) => console.log(err),
      () => console.log(this.todos));
  };

  TodoClicked(todo: TodoResp): void {
    console.log(todo);
  }

  get currentUserId() {
    if (this.authService.currentUser)
      this._currentUserId = this.authService.currentUser.id;

    return this._currentUserId;
  }

  set hideCompletedTasks(value: boolean) {

    if (value) {
      this.rows = this.rowsCache.filter(r => !r.completed);
    }
    else {
      this.rows = [...this.rowsCache];
    }
    this._hideCompletedTasks = value;
  }

  get hideCompletedTasks() {
    return this._hideCompletedTasks;
  }

}
