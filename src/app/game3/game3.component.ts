import { Component } from '@angular/core';
 
enum Player {
  None = "",
  X = "X",
  O = "O"
}

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component {

  cells : Player[] = new Array(9).fill(Player.None);
  currentPlayer : Player = Player.X;
  isGameOver : boolean = false;
  winner : Player | null = null;
  makeChanges(index : number) : void {
    if(!this.cells[index] && !this.isGameOver){
      this.cells[index] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
    }
  }
  checkWinner(): void{
    const winnerPositions : number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for(const[a, b, c] of winnerPositions){
      if(this.cells[a] != Player.None && 
        this.cells[a] === this.cells[b] && 
        this.cells[a] === this.cells[c] ){
        this.winner = this.cells[a];
        this.isGameOver = true;
        break;
      }
    }
  }
  reset(){
    this.cells.fill(Player.None);
    this.currentPlayer = Player.X;
    this.isGameOver = false;
    this.winner = null;
  }

}
