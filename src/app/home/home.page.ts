import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { Task } from '../model/task.model';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';

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

  // todoList = []
  
  // today: number = Date.now();

  // constructor(public modalCtlr: ModalController, public todoService:TodoService) { 
  //   this.getAllTask()
  // }

  // async addNewItem() {
  //   const modal = await this.modalCtlr.create({
  //     component: AddNewTaskPage,
  //   })
  //   modal.onDidDismiss().then(newTask =>{
  //     this.getAllTask()
  //   })
  //   return await modal.present()
  // }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

   delete(id) { 
    this.todoService.deleteTask(id)
    this.getAllTask()
  }

  // update(id) { 
  //   this.todoService.deleteTask(id)
  //   this.getAllTask()
  // }

  // delete(key) { 
  //   this.todoService.deleteTask(key)
  //   this.getAllTask()
  // }

  // async update(selectedTask){
  //   const modal = await this.modalCtlr.create({
  //     component: UpdateTaskPage,
  //     componentProps: {task: selectedTask}
  //   })

  //   modal.onDidDismiss().then(()=>{
  //     this.getAllTask()
  //   })
    
  //   return await modal.present()
  // }

}
