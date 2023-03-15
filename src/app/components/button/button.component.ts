import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() color: string;
  @Output() buttonClick = new EventEmitter() ;

  constructor(){
  
  }

  onClick(){
    console.log("Button clicked  ")
    this.buttonClick.emit() 
  }
}

