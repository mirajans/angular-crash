import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botton',
  templateUrl: './botton.component.html',
  styleUrls: ['./botton.component.css']
})
export class BottonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Input() padding:string;
  constructor() { }

  ngOnInit(): void {
  }

}
