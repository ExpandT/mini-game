import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameOverDialogComponent {
  @Input() winner: string = '';
  @Input() playerScore: number = 0;
  @Input() computerScore: number = 0;
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
