import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  private baseUrl = environment.apiUrl; // "http://localhost:8080/api/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
    
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.baseUrl + `/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  updateTask(task: Task, id: number): Observable<Task> {
    return this.http.put<Task>(this.baseUrl + `/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + `/${id}`);
  }

}
