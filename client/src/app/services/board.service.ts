import { Injectable } from '@angular/core';
   import { Board } from '../class/board'


   @Injectable()
   export class BoardService {


     boards: Board[] = [];

     constructor() { }

     // method for creating a board which takes
     // an optional size parameter that defaults to 5
     createBoard(size:number = 19, size2:number = 19) : BoardService {
       // create tiles for board
       let tiles = [];
       for(let i=0; i < size; i++) {
         tiles[i] = [];
         for(let j=0; j< size2; j++) {
           tiles[i][j] = { used: false, value: 0, status: ''};
         }
       }
       // generate random ships for the board
       // for (let i = 0; i < size * 3; i++) {
       //   tiles = this.randomShips(tiles, size);
       // }
       // create board
       let board = new Board({
           tiles: tiles
       });
       // append created board to `boards` property
       this.boards.push(board);
       return this;
     }

     // function to return the tiles after a value
     // of 1 (a ship) is inserted into a random tile
     // in the array of tiles
     // randomShips(tiles: Object[], len: number) : Object[] {
     //   len = len - 1;
     //   let ranRow = this.getRandomInt(0, len),
     //       ranCol = this.getRandomInt(0, len);
     //   if (tiles[ranRow][ranCol].value == 1) {
     //     return this.randomShips(tiles, len);
     //   } else {
     //     tiles[ranRow][ranCol].value = 1;
     //     return tiles;
     //   }
     // }

     // helper function to return a random
     // integer between ${min} and ${max}
     getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
     }

     // returns all created boards
     getBoards() : Board[] {
       return this.boards;
     }
     
   }
