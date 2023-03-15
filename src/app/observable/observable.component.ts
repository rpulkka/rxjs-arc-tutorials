import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  agents: Observable<string> | undefined
  agentName: string | undefined

  constructor() {}

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer) {
        try {
          observer.next('Hamlet')
          setTimeout(() => observer.next('Momo'), 3000)
          setTimeout(() => observer.next('Ramona'), 6000)
        } catch (e) {
          observer.error(e)
        }
      }
    )

    this.agents.subscribe(data => {
      this.agentName = data
    })
  }
}
