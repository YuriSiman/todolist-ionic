import { Injectable } from '@angular/core';
import { Task } from './model/task.model';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private todoList: Array<Task> = [
  //   {
  //     id: 1,
  //     name: 'Teste 1',
  //     date: Date.now(),
  //     priority: 'high',
  //     category: 'Trabalho',
  //     status: true
  //   },
  //   {
  //     id: 2,
  //     name: 'Teste 2',
  //     date: Date.now(),
  //     priority: 'middle',
  //     category: 'Estudos',
  //     status: true
  //   },
  //   {
  //     id: 3,
  //     name: 'Teste 3',
  //     date: Date.now(),
  //     priority: 'low',
  //     category: 'Pessoal',
  //     status: true
  //   },
  //   {
  //     id: 4,
  //     name: 'Teste 4',
  //     date: Date.now(),
  //     priority: 'high',
  //     category: 'Trabalho',
  //     status: true
  //   }
  // ];

  constructor(private firestore: AngularFirestore) { }

  public addTask(task: Task) {
    delete task.id;
    return this.firestore.collection('tasks').add({...task});
  }

  public getAllTasks() {
    return this.firestore.collection('tasks').snapshotChanges();
  }

  public get(id: string) {
    return this.firestore.collection('tasks').doc(id).ref.get().then( (documento)=>{
      if(documento.exists){
        const codigo = documento.id;
        const dados = documento.data();

        return {
          id: codigo,
          name: dados['name'],
          date: dados['date'],
          priority: dados['priority'],
          category: dados['category'],
          status: dados['status']
        }
      }

      return{
        id: '',
        name: '',
        date: 0,
        priority: '',
        category: '',
        status: false
      }
    });
  }

  public updateTask(task: Task) {
    return this.firestore.doc(`tasks/${task.id}`).update(task);
  }

  public deleteTask(id: string) {
    return this.firestore.doc(`tasks/${id}`).delete();
  }
}
