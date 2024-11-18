import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-firts-component',
  standalone: true,
  imports: [],
  templateUrl: './firts-component.component.html',
  styleUrl: './firts-component.component.css'
})
export class FirtsComponentComponent implements OnInit {
      name: string = 'Tiago';

  constructor() {
  }

  ngOnInit(): void {
  }

}
