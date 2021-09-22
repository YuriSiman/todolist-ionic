import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../model/task.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage {

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

}
