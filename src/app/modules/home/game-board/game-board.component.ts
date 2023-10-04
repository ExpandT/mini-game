import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CellSquareColor } from "../../../core/enums/cell-square-color.enum";
import { NavigationPaths } from "../../../core/enums/navigation-paths.enum";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameBoardComponent implements OnInit {
  protected readonly NavigationPaths = NavigationPaths;
  cells: string[][] = [];
  playerScore: number = 0;
  computerScore: number = 0;
  winner: string = '';
  gameStarted: boolean = false;
  timerId: ReturnType<typeof setInterval> | null = null;
  timeLimit: number = 1000;
  isShowGameOverModal = false;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.initializeGameBoard();
  }

  initializeGameBoard(): void {
    this.cells = Array.from({ length: 10 }, () => Array(10).fill(CellSquareColor.BLUE));
    this.cdr.detectChanges();
  }

  startGame(): void {
    this.gameStarted = true;
    this.clearScoreBoard();

    this.timerId = setInterval(() => {
      const [randomRow, randomCol] = this.getRandomBlueCellCoordinates();
      this.cells[randomRow][randomCol] = CellSquareColor.YELLOW;
      this.cdr.detectChanges();

      setTimeout(() => {
        if (this.cells[randomRow][randomCol] === CellSquareColor.YELLOW) {
          this.cells[randomRow][randomCol] = CellSquareColor.RED;
          this.computerScore++;
          this.cdr.detectChanges();

          if (this.playerScore === 10 || this.computerScore === 10) {
            this.endGame();

            return;
          }
        }
      }, this.timeLimit);

    }, this.timeLimit);
  }

  cellClicked(row: number, col: number): void {
    if (this.cells[row][col] === CellSquareColor.YELLOW) {
      this.cells[row][col] = CellSquareColor.GREEN;
      this.playerScore++;
      this.cdr.detectChanges();

      if (this.playerScore === 10 || this.computerScore === 10) {
        this.endGame();
      }
    }
  }

  endGame(): void {
    clearInterval(this.timerId!);
    this.gameStarted = false;
    this.initializeGameBoard();
    this.winner = this.playerScore === 10 ? 'Гравець' : 'Комп\'ютер';
    this.isShowGameOverModal = true;
    this.cdr.detectChanges();
  }

  clearScoreBoard(): void {
    this.playerScore = 0;
    this.computerScore = 0;
    this.cdr.detectChanges();
  }

  closeModalHandler() {
    this.isShowGameOverModal = false;
  }

  private getRandomBlueCellCoordinates(): [number, number] {
    while (true) {
      const randomRow = Math.floor(Math.random() * 10);
      const randomCol = Math.floor(Math.random() * 10);

      if (this.cells[randomRow][randomCol] === CellSquareColor.BLUE) {
        return [randomRow, randomCol];
      }
    }
  }

}
