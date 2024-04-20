import { Component,OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-details-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.css'
})
export class DetailsViewComponent implements OnInit {
  itemId : any = undefined;
  itemsList : any =[]
  private baseURL = "./assets/data/DatosScraping.json";
  constructor(private route : ActivatedRoute, private http : HttpService){
 }
 ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id')
    this.http.loadJson(this.baseURL).subscribe((data) => {
       this.itemsList = data
    })
 }


}
