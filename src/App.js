import "./styles/global.css";
import Grid from "./components/grid";
import { createContext, useMemo, useState } from "react";
import GameInfoPanel from "./components/game-info-panel";

function App() {
  const [gameState, setGameState] = useState({
    isBoom: false,
    isExposeAllBlocks: false,
    isShowBombs: false,
    bombIndexes: [],
    unexploredNonBombBlocksCount: -1
  });

  const contextValue = useMemo(() => ([gameState, setGameState]), [gameState]);

  return (
    <GameContext.Provider value={contextValue}>
      <div className="app">
        <GameInfoPanel />
        <Grid />
      </div>
    </GameContext.Provider>
  );
}

export const GameContext = createContext(null);
export default App;