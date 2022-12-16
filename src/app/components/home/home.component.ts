import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent {

  unDoneModels: UnDoneModel[] = [];
  doneModels: DoneModel[] = [];
  @ViewChild("addInput") addInput: ElementRef;

  constructor() {
    console.log("constructor çalıştı");
  }

  ngOnInit(): void {
    console.log("ngOnInit çalıştı");
  }

  ngOnChanges(){
    console.log("ngOnChanges çalıştı");
  }

  ngDoCheck(){
    console.log("ngDoCheck çalıştı");
  }

  ngAfterViewInit(){
    console.log("ngAfterInit çalıştı");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked çalıştı");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy çalıştı");
  }

  addUnDoneItem(addInput: HTMLInputElement) {

    // if (this.unDoneInput != '') {
    if (addInput.value != '') {
      let unDoneModel = new UnDoneModel();
      // unDoneModel.title = this.unDoneInput;
      unDoneModel.title = addInput.value;
      unDoneModel.date = Date();
      this.unDoneModels.push(unDoneModel);
      // this.unDoneInput = "";
    }
  }


}
