import { BoardPosition } from "./BoardPosition";
import { CardInstance } from "./CardInstance";
import { PlayerSide } from "./PlayerSide";

export interface SetZone {
    side: PlayerSide;

    position: BoardPosition;

    card: CardInstance | null;
}