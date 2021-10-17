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
    this.todoService.getAllTasks().subscribe( (tasks)=> {
 
     this.todoList = tasks.map((obj)=> {
       const idDocumento = obj.payload.doc.id;
       const dados = obj.payload.doc.data();
 
       return {
        id: idDocumento,
        name: dados['name'],
        date: dados['date'],
        priority: dados['priority'],
        category: dados['category'],
        status: dados['status']
       };
     });
    });
   }

  getAllTask(){
    this.todoService.getAllTasks().subscribe( (tasks)=> {
 
      this.todoList = tasks.map((obj)=> {
        const idDocumento = obj.payload.doc.id;
        const dados = obj.payload.doc.data();
  
        return {
         id: idDocumento,
         name: dados['name'],
         date: dados['date'],
         priority: dados['priority'],
         category: dados['category'],
         status: dados['status']
        };
      });
     });
  }

}
