import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../menu/menu.class';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input() menu!: Menu;

  anchorClassStyle: string="";
  constructor() { }

  ngOnInit(): void {    //Way of editing each item in the menu by individual value
    if(this.menu.display === "About"){
      this.anchorClassStyle = "text-danger"
    }
  }

}
