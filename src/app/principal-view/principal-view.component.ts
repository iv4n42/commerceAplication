import { Component,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-principal-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './principal-view.component.html',
  styleUrl: './principal-view.component.css'
})
export class PrincipalViewComponent implements OnInit{
   items1: any = [];
   constructor(private _JsonLoader : HttpService){}
   private baseURL = "./assets/data/DatosScraping.json";
   ngOnInit(){
     this._JsonLoader.loadJson(this.baseURL).subscribe((data) => {
       this.items1 = data
       console.log(data)
 
     })
    }

}
