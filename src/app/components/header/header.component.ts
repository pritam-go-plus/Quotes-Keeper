import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from "rxjs"

import { Router } from "@angular/router"



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string 
  showAddQuote: boolean
  subscription: Subscription

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddQuote = value
    })
  }
  
 
// ngOnInit() {
//       this.activatedroute.data.subscribe(data => {
//           this.title=data;
//       })
// }
  toggleAddQuote() {
    console.log('toggle add clicked');
    this.uiService.toggleAddQuote()
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
