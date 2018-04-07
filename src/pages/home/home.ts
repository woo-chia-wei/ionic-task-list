import { Component, ViewChild } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { Task } from '../../model/task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild(List) list:List;
  public tasks: Task[];

  constructor(public navCtrl: NavController) {
    this.tasks = [
      {id : 1, title: 'Wash the dishes', isDone: false, isEdit: false},
      {id : 2, title: 'Call mommy', isDone: false, isEdit: false},
      {id : 3, title: 'Train at Tutorials Boko', isDone: false, isEdit: false},
    ];
  }

  // Add Task
  addTask(title){
    if(title){
      this.tasks.push(new Task(title))
    }
  }

  // Edit Task
  editTask(task){
    task.isEdit = !task.isEdit;
    this.list.closeSlidingItems();
  }

  // Deelete Task
  deleteTask(id){
    this.tasks.splice(this.tasks.findIndex(x => x.id == id), 1);
  }

}
