import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndpointFactory } from './endpoint-factory.service';
import { ConfigurationService } from './configuration.service';
import { LocalStoreManager } from './local-store-manager.service';
import { TodoResponse, TodoResp} from '../models/Todoresponse.model'
import { Utilities } from './utilities';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
      constructor(private http: HttpClient) {
    }
    loadTodos() {
      return this.http.get<TodoResp[]>(environment.apiUrl + `/todo`);   
    }
}
