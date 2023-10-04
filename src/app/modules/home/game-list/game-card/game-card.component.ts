import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameCardComponent {
  @Input() gameName: string = '';
  @Input() gameDescription: string = '';
  @Input() gameImgSrc: string = '';
  @Input() gameRouterLink: string = '';
}
