import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  squads: FirebaseListObservable<any>;
  individuals: Observable<any>;
  selectedIndividual: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {

    this.squads = this.af.database.list('/squads');
    this.individuals = this.af.database.list('/individuals')
      .map(individuals => {
        individuals.map(individual => {
          individual.squadName = this.af.database.object('/squads/' + individual.squad);
          console.log(individual.squadName);
        });
        return individuals;
      });



    //second map is on array type

    this.selectedIndividual = this.af.database.object('/individuals/1');


  }
}
