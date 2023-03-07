import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() color: string;
 
  // @Output() buttonClick = new EventEmitter() ;



  onClick(){
    console.log("Button clicked - Output me ")
    // this.buttonClick.emit()
  }
}

