import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import { Game4Component } from './game4/game4.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TictacToeComponent } from './tictac-toe/tictac-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    Game2Component,
    Game3Component,
    Game4Component,
    TodoListComponent,
    TictacToeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
