import { Component, EventEmitter, Output } from '@angular/core';
import { ElementsdataService } from '../elementsdata.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  //@Output() sendChildValue: EventEmitter<any> = new EventEmitter<any>();

  elements:any[]=[]

  constructor(private servicedata:ElementsdataService){
      this.elements=this.servicedata.elementsdata;
  }

  ngOnInit(){
   
  }

  senddata(){
    //this.sendChildValue.emit(this.elements);
  }

  

  onDragStart(event:any,e:any) {
   
    console.log(e)

    if (event.dataTransfer) {
      event.dataTransfer.setData('text', (event.target as HTMLElement).id);
     // this.elements.splice(prevIndex, 1);
    }
  }

  
  
}
