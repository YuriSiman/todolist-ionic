import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    const id = this.rotaAtiva.snapshot.paramMap.get('id');
    this.todoService.get(id).then((task)=>{
      this.task = task;
    });
    this.categories.push('Pessoal')
    this.categories.push('Trabalho')
    this.categories.push('Estudos')
  }

  public update() {
    this.todoService.updateTask(this.task).then((result)=>{
      console.log(result);
      this.rota.navigate(['/home']);
    });
  }

  categories =[]
  categorySelectedCategory

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    this.task.category = this.categorySelectedCategory;
    console.log(this.categorySelectedCategory);
  }
}

