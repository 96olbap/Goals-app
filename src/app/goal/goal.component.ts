import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  // styles: ['h6 {color: red} '],
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[]=[
    new Goal(1, 'Check-list', '  -->  Check out and fill in the health check-list between 6pm and 11pm', new Date(2022,4,14)),
    new Goal(2, 'Catchup LMS', '  -->  Go through the content really quick to get all caught up', new Date(2022,4,17)),
    new Goal(3, 'Woodworks', '  -->  Complete outstanding projects', new Date(2022,4,19)),
  ];
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index: any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  // completeGoal(isComplete, index){
  //   if (isComplete){
  //     this.goals.splice(index,1);
  //   }
  // }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }


  constructor() { 

  }

  ngOnInit(): void {
  }

}
