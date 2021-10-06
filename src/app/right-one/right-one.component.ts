import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-one',
  templateUrl: './right-one.component.html',
  styleUrls: ['./right-one.component.css']
})
export class RightOneComponent implements OnInit {
  @Input() a = "";
  @Input() b = "";
  constructor() { }

  ngOnInit(): void {
  }

}
