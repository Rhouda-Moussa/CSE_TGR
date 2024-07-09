import { Component} from '@angular/core';
import { FaceSnap } from '../face-model/face-snap';
import { DatePipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../service/face-snapces.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe,DatePipe, PercentPipe, RouterLink],
  templateUrl: './single-first-page.component.html',
  styleUrl: './single-first-page.component.scss'
})
export class SingleFirstPageComponent {
  faceSnap!: FaceSnap;
  nombreSnap!: boolean;
  textButon!: string;
  

  ngOnInit(): void {
    this.nombreSnap= false;
    this.textButon='oh snap';
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapeService.getFaceSnapById(faceSnapId);
  }
constructor(private faceSnapeService : FaceSnapService, private route: ActivatedRoute){

}

onSnaps(): void {
  if (this.nombreSnap) {
    this.usnap();
  }else {
    this.snap();
  }
  
}
snap() {
  this.faceSnapeService.snapFaceSnapById(this.faceSnap.id, 'snap');
  this.textButon='ops unsnap';
  this.nombreSnap=true;

}
usnap() {
  this.faceSnapeService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  this.textButon='oh snap';
  this.nombreSnap=false;

}

}
