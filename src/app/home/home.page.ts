import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../model/task.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public todoList: Array<Task> = [];


  constructor(public modalCtlr: ModalController, public todoService:TodoService) { 
    this.getAllTask()
  }

  ngOnInit() {
    this.todoList = this.todoService.getAllTasks();
    // console.log(this.pecasService.getAll());
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

   delete(id) { 
    this.todoService.deleteTask(id)
    this.getAllTask()
  }
}
