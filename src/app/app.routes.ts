import { Routes } from '@angular/router';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';

export const routes: Routes = [{path : 'principal', component :PrincipalViewComponent},
                               {path : 'principal/details/:id', component : DetailsViewComponent},
                               { path : 'principal/details/:id/back', redirectTo :'principal', pathMatch : 'full'},
                               { path: '', redirectTo: 'principal', pathMatch: 'full'},
                                
];