import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndpointFactory } from './endpoint-factory.service';
import { ConfigurationService } from './configuration.service';
import { LocalStoreManager } from './local-store-manager.service';
import { TodoResponse, TodoResp} from '../models/Todoresponse.model'
import { Utilities } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    constructor(private router: Router, private configurations: ConfigurationService, private endpointFactory: EndpointFactory,
      private localStorage: LocalStoreManager) {
    }
  loadTodos(todo: TodoResp[]) { 
    return this.endpointFactory.getTodoEndpoint<TodoResp[]>().
      subscribe((data: TodoResp[]) => {
          todo = data;
          this.processTodoResponse(todo);
        });
    }
    private processTodoResponse(response: TodoResp[]) {
      {
        console.log (response);
    }
  }
}
