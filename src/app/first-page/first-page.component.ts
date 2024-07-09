import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../face-model/face-snap';
import { CurrencyPipe, DatePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../service/face-snapces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe,DatePipe, CurrencyPipe, PercentPipe],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  
  
}
