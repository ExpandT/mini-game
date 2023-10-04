import { ChangeDetectionStrategy, Component } from '@angular/core';
import { gameList } from "../../../core/configs/game-list.config";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListComponent {
  protected readonly gameList = gameList;
}
