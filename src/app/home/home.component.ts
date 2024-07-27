import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementsdataService } from '../elementsdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foundObjects:any[]=[]
  files: File[] = [];
  selecteddata:any[]=[]
  eventdata:any[]=[] ;
  constructor(private servicedata:ElementsdataService){
    this.selecteddata=this.servicedata.elementsdata;
}


  onDrop(event: DragEvent) {
    console.log(event)
    const data = event.dataTransfer?.getData('text');
    console.log(data);
    this.eventdata.push(data);
    if (data) {
      const draggedElement = document.getElementById(data);
      if (draggedElement) {
        (event.target as HTMLElement).appendChild(draggedElement);
        
      }
    }
   console.log(this.selecteddata)
  }

  Submit(){
   
    console.log(this.eventdata);
    this.foundObjects = this.eventdata.map(id => this.selecteddata.find(obj => obj.id === id));
    console.log(this.foundObjects);
    
  }

  

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

 

}
