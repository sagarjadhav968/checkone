import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
  constructor(private _router : Router) {    
  this.sideNavMenu = [{"text":"New Node","expand":false,"id":null,"leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"children":[{"text":"first","expand":false,"id":"5f98dcbd-bf6d-430d-8480-7ce9c45dd30f","leaf":true,"icon":"fa fa-file-text-o","routerLink":"newgit/core/first","children":null}]}];   }
  routeToLink(data: any) {
    if( data.children==null && data.routerLink){
      this._router.navigate([data.routerLink]);
     }
        }
  
}
