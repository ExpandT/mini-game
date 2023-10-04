import { Game } from "../types/game.interface";
import { NavigationPaths } from "../enums/navigation-paths.enum";

export const gameList: Game[] = [
  {
    name: 'Квадрат Реакції',
    description: 'Перевірь свою реакцію!',
    imgSrc: 'assets/images/game-icon.png',
    routerLink: NavigationPaths.REACTION_SQUARE,
  },
  {
    name: 'Скоро...',
    imgSrc: 'assets/images/question-mark.png',
  }
]
