import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingNewsPaper';

  cards=[
    {
      link : "assets/img/trending/trending_bottom1.jpg",
      heading : "Lifestyle",
      desc : "Get the Illusion of Fuller Lashes by Mascng."
    }, 
    {
      link : "assets/img/trending/trending_bottom2.jpg",
      heading : "Sports",
      desc : "Get the Illusion of Fuller Lashes by Mascng."
    },
    {
      link : "assets/img/trending/trending_bottom3.jpg",
      heading : "Travels",
      desc : "Welcome To The Best Model Winner Contest"
    }
  ]

  rightone=[
    {
      link : "assets/img/trending/right1.jpg",
      name : "Concert"
    },
    {
      link : "assets/img/trending/right2.jpg",
      name : "sea beach"
    },
    {
      link : "assets/img/trending/right3.jpg",
      name : "Bike Show"
    },
    {
      link : "assets/img/trending/right4.jpg",
      name : "See beach"
    },
    {
      link : "assets/img/trending/right5.jpg",
      name : "Skeping"
    }
  ]
  
}
