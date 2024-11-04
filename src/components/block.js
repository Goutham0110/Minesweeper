import { useContext, useState } from "react";
import { GameContext } from "../App";

export default function Block({ data }) {
    const [blockData, setBlockData] = useState(data);
    const [gameState, setGameState] = useContext(GameContext);
    const isBombBlock = blockData.value === "bomb";

    function openBlock() {
        setBlockData((prev) => ({
            ...prev,
            isOpened: true
        }));
        setGameState((prev) => ({
            ...prev,
            isBoom: prev.isBoom || isBombBlock,
            unexploredNonBombBlocksCount: prev.unexploredNonBombBlocksCount - 1
        }));
    }

    return (
        <div className="block" onClick={openBlock} style={{ backgroundColor: blockData.isOpened ? "#FF6A3D" : "#724840" }}>
            {!blockData?.isOpened ? '' : (isBombBlock ? '💣' : blockData.value)}
        </div >
    )
}