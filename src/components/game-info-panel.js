import { useContext } from "react"
import { GameContext } from "../App";

export default function GameInfoPanel() {
    const [gameState] = useContext(GameContext);

    let gameStatus = null;
    if (gameState.isBoom) gameStatus = "💥💥💥 Boom! 💣 Game Over 💥💥💥";
    if (!gameState.unexploredNonBombBlocksCount) gameStatus = "You have found all the mines💣  Good Game🥳";

    if (!gameStatus) gameStatus = `Keep Going! Still ${gameState.unexploredNonBombBlocksCount} blocks to explore 🔍`;

    return (
        <div className="gameInfoPanel">
            <h3>💣   M - I - N - E - S - W - E - E - P - E - R   💣</h3>
            <h5>{gameStatus}</h5>
        </div>
    )
}