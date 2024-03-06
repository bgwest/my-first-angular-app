import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'servers-component',
  // selector: '[servers-component]',
  selector: '.servers-component',
  // templateUrl: './servers.component.html',
  template: '<server-component></server-component><server-component></server-component>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }
}
