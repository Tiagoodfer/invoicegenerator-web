import { Component } from '@angular/core';
import {FirtsComponentComponent} from './components/firts-component/firts-component.component';
import {ParentDataComponent} from './components/parent-data/parent-data.component';
import {DirectivesComponent} from './components/directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FirtsComponentComponent,
    ParentDataComponent,
    DirectivesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName = "Joaquim";

  userData = {
    email: "joaquim@gmail.com",
    role: "Admin"
  }

  title = 'invoice-generator-web';
}
