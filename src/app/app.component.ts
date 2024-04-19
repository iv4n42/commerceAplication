import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            PrincipalViewComponent,
            DetailsViewComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  title = 'commerceAplication';
  public showComponent: boolean = true;
  constructor(){}
  


 
}
