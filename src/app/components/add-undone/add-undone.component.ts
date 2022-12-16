import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-add-undone',
  templateUrl: './add-undone.component.html',
  styleUrls: ['./add-undone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUndoneComponent {
  @Input() unDoneModels: UnDoneModel[];
  // unDoneInput: string = "";

  
}
