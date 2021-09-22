import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Task } from '../model/task.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {

  public task: Task = new Task();

  constructor(private todoService: TodoService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router) {}

  ngOnInit() {
    const id = Number(this.rotaAtiva.snapshot.paramMap.get('id'));
    this.task = this.todoService.get(id);
    this.categories.push('Pessoal')
    this.categories.push('Trabalho')
    this.categories.push('Estudos')
  }

  public update() {
    this.todoService.updateTask(this.task);
    this.rota.navigate(['/home']);
  }


  // @Input() task;
  categories =[]
  categorySelectedCategory

  // newTaskObj = {}
  // itemName
  // itemDueDate 
  // itemPriority
  // itemCategory

  // constructor(public modalCtlr:ModalController, public todoServive:TodoService) { }

  // ngOnInit() {
  //   this.categories.push('work')
  //   this.categories.push('personal')

  //   this.itemName = this.task.value.itemName
  //   this.itemDueDate = this.task.value.itemDueDate
  //   this.itemPriority = this.task.value.itemPriority
  //   this.categorySelectedCategory = this.task.value.itemCategory
  //   // console.log(this.task);
  // }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    this.task.category = this.categorySelectedCategory;
    console.log(this.categorySelectedCategory);
  }

  // async dismis(){
  //   await this.modalCtlr.dismiss()
  // }

  // async update(){
  //   this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
  //   let uid = this.task.key
  //   await this.todoServive.updateTask(uid,this.newTaskObj)
  //   this.dismis()
  // }
}

