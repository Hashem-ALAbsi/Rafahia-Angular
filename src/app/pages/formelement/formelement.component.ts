import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-formelement',
  templateUrl: './formelement.component.html',
  styleUrls: ['./formelement.component.css']
})
export class FormelementComponent {
  @Input() label:string;

}
