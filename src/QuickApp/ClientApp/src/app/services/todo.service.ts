import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndpointFactory } from './endpoint-factory.service';
import { ConfigurationService } from './configuration.service';
import { LocalStoreManager } from './local-store-manager.service';
import { TodoResponse} from '../models/Todoresponse.model'
import { Utilities } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    constructor(private router: Router, private configurations: ConfigurationService, private endpointFactory: EndpointFactory,
      private localStorage: LocalStoreManager) {
    }
    loadTodos() { 
      return this.endpointFactory.getTodoEndpoint<TodoResponse[]>().
        subscribe((data: TodoResponse[]) => {
          this.processTodoResponse(data);
        });
    }
    private processTodoResponse(response: TodoResponse[]) {
    {
        return (response);
    }
  }
}
