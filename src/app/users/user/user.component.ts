import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // tslint:disable-next-line: no-string-literal
      id: this.route.snapshot.params['id'],
      // tslint:disable-next-line: no-string-literal
      name: this.route.snapshot.params['name']
    };
    this.route.params.subscribe(
      (params: Params) => {
        // tslint:disable-next-line: no-string-literal
        this.user.id = params['id'];
        // tslint:disable-next-line: no-string-literal
        this.user.name = params['name'];
      }
    );
  }

}
