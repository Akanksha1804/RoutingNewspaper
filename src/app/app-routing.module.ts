import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FinalOneComponent } from './final-one/final-one.component';


const routes: Routes = [
  
      {
        path : "finalone",
        component : FinalOneComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
export const routingComponents = [FinalOneComponent]
