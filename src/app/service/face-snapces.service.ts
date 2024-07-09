import { Injectable } from '@angular/core';
import { FaceSnap } from '../face-model/face-snap';
import { SnapType } from '../face-model/snap-type.type';


@Injectable({
  providedIn: 'root'
})

export class FaceSnapService{
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
            'Archibald',
            'Mon meilleur ami depuis tout petit !',
            new Date(),
            10,
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
          ).withLocation('Rabat Hay Riyad'), 
          new FaceSnap('ronaldo','i am ronaldo', new Date(),160,'https://th.bing.com/th/id/OIP.pDsbWx4GPXKBOZ1R1quxZwHaQD?rs=1&pid=ImgDetMain'),
          new FaceSnap('messi','i am messi', new Date(), 5,'https://th.bing.com/th/id/OIP.saT9t5OzLzOOUIxWQjZiXAHaJh?rs=1&pid=ImgDetMain')
      
    ];
    
    getFaceSnaps(): FaceSnap[] {
      return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
      }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const foundFaceSnap = this.getFaceSnapById(faceSnapId);
        foundFaceSnap.snap(snapType);
    }
    
}