import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [     //This is how we make the menu dynamic, add in a new instance for a new page
    new Menu("Home","/home"),
    new Menu("About","/about"),
    new Menu("Support","/support")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
