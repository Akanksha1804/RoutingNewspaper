import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-bottom',
  templateUrl: './main-bottom.component.html',
  styleUrls: ['./main-bottom.component.css']
})
export class MainBottomComponent implements OnInit {
  @Input() link = "";
  @Input() name = "";
  @Input() desc = "";
  constructor() { }

  ngOnInit(): void {
  }

}
