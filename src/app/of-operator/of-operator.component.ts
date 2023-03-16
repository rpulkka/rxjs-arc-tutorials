import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.scss']
})
export class OfOperatorComponent {

  studentList = ['Hamlet', 'Momo', 'Ramona']
  students: Observable<string[]> = of(this.studentList)

  studentName: Observable<string> = of('Ramona')

  studentObject = {
    id: 10,
    name: 'Ramona'
  }
  student$: Observable<{id: number, name: string}> = of(this.studentObject)

  fromStudents$: Observable<string> = from(this.studentList)

  ngOnInit(): void {
    this.students.subscribe(data => {
      console.log(data)
    })

    this.studentName.subscribe(data => {
      console.log(data)
    })

    this.student$.subscribe(data => {
      console.log(data)
    })

    console.log('FROM')

    this.fromStudents$.subscribe(data => {
      console.log(data)
    })
  }
}
