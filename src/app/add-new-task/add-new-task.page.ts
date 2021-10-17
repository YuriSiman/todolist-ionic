import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Task } from '../model/task.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  public task: Task = new Task();

  constructor(public modalCtlr: ModalController, public todoService:TodoService, private rota: Router) { }

  ngOnInit() {
    this.categories.push('Pessoal')
    this.categories.push('Trabalho')
    this.categories.push('Estudos')
  }

  public add() {
    if (this.task.name !== null && this.task.name !== undefined) {
      this.todoService.addTask(this.task).then( (result)=> {
        console.log(result);

        this.rota.navigate(['/home']);
      }).catch( (error)=> {
        console.log(error);
      });
    }
  }

  categories =[]
  categorySelectedCategory
  
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    this.task.category = this.categorySelectedCategory;
    console.log(this.categorySelectedCategory);
  }
}
