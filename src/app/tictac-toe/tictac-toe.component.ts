import { Component } from '@angular/core';

@Component({
  selector: 'app-tictac-toe',
  templateUrl: './tictac-toe.component.html',
  styleUrls: ['./tictac-toe.component.css']
})
export class TictacToeComponent {
  toggled: boolean = false;
  public winner = "none";
  public board = [
    ["", "", "",],
    ["", "", "",],
    ["", "", "",]
  ];
  reset() {
    this.board = [
      ["", "", "",],
      ["", "", "",],
      ["", "", "",]
    ];
    this.toggled = false;
    this.winner = "none";
  }

  nextPlayer(rowVal : any, colVal : any){
    if(this.board[rowVal][colVal] === ""){
      if(this.winner = "none"){
        this.board[rowVal][colVal] = this.toggled ? 'X' : 'O';
        
        //check 1st row
        if(this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] !== ""){
          this.winner = this.toggled ? 'X' : 'O';
        }
        //check 1st row
        if(this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] !== ""){
          this.winner = this.toggled ? 'X' : 'O';
        }
        //check 1st row
        if(this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] !== ""){
          this.winner = this.toggled ? 'X' : 'O';
        }
        //check 1st row
        if(this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] !== ""){
          this.winner = this.toggled ? 'X' : 'O';
        }
        //check 1st row
        if(this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] !== ""){
          this.winner = this.toggled ? 'X' : 'O';
        }
        //check 1st row
        if(this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] !== ""){
          this.winner = this.toggled ? 'X' : 'O';
        }
        //check 1st row
        if(this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] !== ""){
          this.winner = this.toggled ? 'X' : 'O';
        }
        //check 1st row
        if(this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] !== ""){
          this.winner = this.toggled ? 'X' : 'O';
        }
      }
      this.toggled = !this.toggled;
    }
  }
}
