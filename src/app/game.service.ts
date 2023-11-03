import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board : any = [];
  boardSize : number = 9;
  activePlayer : string = "X";
  turnCount: number = 0;
  isGameRunning: boolean = false;
  isGameOver: boolean = false;
  winner: boolean = false;


  constructor() { 
    this.newGame();
  }

  newGame(){
    this.activePlayer = "X";
    this.turnCount = 0;
    this.isGameOver = false;
    this.isGameRunning = false;
    this.winner = false;
    this.createBoard();
  }
  createBoard(){
    let board = [];
    for(let i = 0; i < 9; i++){
      board.push({id:1, state : null});
    };
    return board;
  }
  get getBoard(){
    return this.board;
  }

  set setBoard(board : any){
    this.board = [... board];
  }

  changePlayerTurn(squareCliked: any){
    if(!this.isGameOver){
      this.activePlayer = this.activePlayer === "X" ? "O" : "X";
      this.turnCount++;
      this.isGameOver = this.isGameOver ? true : false 
    }
  }

  updateBoard(squareCliked : any){
    this.board[squareCliked.id].state = squareCliked.state;
  }
}
