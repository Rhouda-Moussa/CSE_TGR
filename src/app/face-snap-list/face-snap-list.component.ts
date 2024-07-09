import { Component } from '@angular/core';
import { FirstPageComponent } from '../first-page/first-page.component';
import { FaceSnap } from '../face-model/face-snap';
import { FaceSnapService } from '../service/face-snapces.service';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FirstPageComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {
  faceSnapes!: FaceSnap[];
  
  constructor(private faceSnapeService: FaceSnapService){

  }

  ngOnInit() {
    this.faceSnapes=this.faceSnapeService.getFaceSnaps();
    
    this.faceSnapes[1].setLocation('Rabat, avenu ibn sina');
  }
}
