import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { Task } from './model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Array<Task> = [
    {
      id: 1,
      name: 'Teste 1',
      date: Date.now(),
      priority: 'high',
      category: 'Trabalho',
      status: true
    },
    {
      id: 2,
      name: 'Teste 2',
      date: Date.now(),
      priority: 'middle',
      category: 'Estudos',
      status: true
    },
    {
      id: 3,
      name: 'Teste 3',
      date: Date.now(),
      priority: 'low',
      category: 'Pessoal',
      status: true
    },
    {
      id: 4,
      name: 'Teste 4',
      date: Date.now(),
      priority: 'high',
      category: 'Trabalho',
      status: true
    }
  ];

  constructor() { }

  public getAllTasks(): Array<Task> {
    return this.todoList;
  }

  public get(id: number): Task {
    for (const obj of this.todoList) {
      if (obj.id === id) {
        // eslint-disable-next-line curly
        return obj;
      }
    }

    return null;
  }

  public addTask(task: Task) {
    task.id = this.todoList.length + 1;
    this.todoList.push(task);
  }

  public updateTask(task: Task) {
    if (task.id || task.id === 0 ) {
      for(const obj of this.todoList) {
        if (obj.id === task.id) {
          obj.name = task.name;
          obj.date = task.date;
          obj.priority = task.priority;
          obj.category = task.category;
          obj.status = task.status;
          break;
        }
      }
    }
  }

  public deleteTask(id: number) {
    let posicao = null;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i= 0; i<this.todoList.length; i++) {
      if (this.todoList[ i ].id === id) {
        posicao = i;
        break;
      }
    }

    if (posicao || posicao === 0) {
      this.todoList.splice(posicao, 1);
    }
  }

  // constructor(private storage: Storage) {
  //   this.init()
  //  }

  // addTask(key, value){
  //   this.storage.set(key,value)
  // }

  // deleteTask(key){
  //   this.storage.remove(key) 
  // }

  // updateTask(key, newValue){
  //   this.storage.set(key, newValue)
  //   this.getAllTasks()
  // }

  // getAllTasks(){
  //   let tasks: any = []
  //   this.storage.forEach((key, value, index) => {
  //   tasks.push({'key':value, 'value':key})
  //   }); 
  //   return tasks   
  // }

  // async init(){
  //   await this.storage.create()
  // }
}
