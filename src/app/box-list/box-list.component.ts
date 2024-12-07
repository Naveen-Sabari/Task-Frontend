import { Component } from '@angular/core';
import { BoxService } from '../box.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

interface Square {
  id: number;
  title: string;
}

@Component({
  selector: 'app-box-list',
  standalone: true,
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css'],
  imports: [CommonModule, FormsModule]  
})
export class BoxListComponent {
  squares: Square[] = [];  
  newTitle = '';

  constructor(private boxService: BoxService, private router: Router) {
    this.loadSquares();
  }

  loadSquares() {
    this.boxService.getSquares().subscribe((squares: Square[]) => this.squares = squares);
  }

  addSquare() {
    if (this.newTitle.trim()) {
      this.boxService.addSquare(this.newTitle).subscribe((square: Square) => {
        this.squares.push(square);
        this.newTitle = ''; 
      });
    }
  }

  deleteSquare(id: number) {
    this.boxService.deleteSquare(id).subscribe(() => {
      this.squares = this.squares.filter(square => square.id !== id);
    });
  }

  viewBoxDetails(id: number) {
    this.router.navigate(['/box', id]);
  }
}
