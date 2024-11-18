import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit {

  @Input() name: string = "";
  @Input() userData!: { role: string; email: string };

  ngOnInit(): void {
  }

}
