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
      this.todoService.addTask(this.task);
      this.rota.navigate(['/home']);
      // this.dismis()
    }
  }

  categories =[]
  categorySelectedCategory

  // newTaskObj = {}
  // itemName
  // itemDueDate 
  // itemPriority
  // itemCategory

  // constructor(public modalCtlr: ModalController, public todoService:TodoService) {

  //  }

  // ngOnInit() {
  //   this.categories.push('pessoal')
  //   this.categories.push('trabalho')
  //   this.categories.push('estudos')
  // }
  
  // async add(){
  //   this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
  //   console.log(this.newTaskObj);
  //   let uid = this.itemName + this.itemDueDate
    
  //   if(uid){
  //     await this.todoService.addTask(uid,this.newTaskObj)
  //   } else {
  //     console.log("não pode salvar tarefa vazia");
  //   }

  //   this.dismis()
  // }
  
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    this.task.category = this.categorySelectedCategory;
    console.log(this.categorySelectedCategory);
  }

  // async dismis(){
  //   await this.modalCtlr.dismiss(this.task)
  // }
}
