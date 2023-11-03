import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  // code goes here
  toggled = false;
  public winner = "none";
  public board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]

  reset() {
    this.board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
   this.toggled = false;
   this.winner = "none";
  }

  nextPlayer(rowVal : any, colVal : any) {
    if (this.board[rowVal][colVal] == "") {
      if (this.winner == "none") {
        this.board[rowVal][colVal] = this.toggled ? "O" : "X";
        
        //check 1st row
        if (this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && this.board[0][0] != "") {
          this.winner =  this.toggled ? "O" : "X";
        }

        //check 2nd row
        if (this.board[1][0] == this.board[1][1] && this.board[1][0] == this.board[1][2] && this.board[1][0] != "") {
          this.winner =  this.toggled ? "O" : "X";
        }

        //check 3rd row
        if (this.board[2][0] == this.board[2][1] && this.board[2][0] == this.board[2][2] && this.board[2][0] != "") {
          this.winner =  this.toggled ? "O" : "X";
        }

        //check 1st col
        if (this.board[0][0] == this.board[1][0] && this.board[0][0] == this.board[2][0] && this.board[0][0] != "") {
          this.winner =  this.toggled ? "O" : "X";
        }

        //check 2nd row
        if (this.board[0][1] == this.board[1][1] && this.board[0][1] == this.board[2][1] && this.board[0][1] != "") {
          this.winner =  this.toggled ? "O" : "X";
        }

        //check 3rd row
        if (this.board[0][2] == this.board[1][2] && this.board[0][2] == this.board[2][2] && this.board[0][2] != "") {
          this.winner =  this.toggled ? "O" : "X";
        }

        //check diagonal 1
        if (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2] && this.board[0][0] != "") {
          this.winner =  this.toggled ? "O" : "X";
        }

        //check diagonal 2
        if (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0] && this.board[0][2] != "") {
          this.winner =  this.toggled ? "O" : "X";
        }
        
        
        this.toggled = !this.toggled;
      }
    }
  }
  ngOnInit() { 
    
  }
}