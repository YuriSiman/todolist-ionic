import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories =[]
  categorySelectedCategory

  newTaskObj = {}
  itemName
  itemDueDate 
  itemPriority
  itemCategory

  constructor(public modalCtlr: ModalController, public todoService:TodoService) {

   }

  ngOnInit() {
    this.categories.push('pessoal')
    this.categories.push('trabalho')
    this.categories.push('estudos')
  }
  
  async add(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    console.log(this.newTaskObj);
    let uid = this.itemName + this.itemDueDate
    
    if(uid){
      await this.todoService.addTask(uid,this.newTaskObj)
    } else {
      console.log("não pode salvar tarefa vazia");
    }

    this.dismis()
  }
  
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss(this.newTaskObj)
  }
}
