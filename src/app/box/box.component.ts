import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from '../box.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box',
  standalone: true,
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  imports: [CommonModule] 
})
export class BoxComponent {
  box$: Observable<any> | null = null;  

  constructor(private route: ActivatedRoute, private boxService: BoxService) {
    const boxId = this.route.snapshot.paramMap.get('id');
    if (boxId) {
      this.box$ = this.boxService.getSquareById(Number(boxId));
    }
  }
}
