import { useState } from "react";
import "../styles/global.css";

export default function Block({ data }) {
    const [blockData, setBlockData] = useState(data);

    function openBlock() {
        setBlockData((prev) => {
            return ({
                ...prev,
                isOpened: true
            })
        })
    }

    return (
        <div className="block" onClick={openBlock} style={{ backgroundColor: blockData.isOpened ? "#738FA7" : "#0C4160" }}>
            {!blockData?.isOpened ? '' : (blockData.value === "bomb" ? '💣' : blockData.value)}
        </div >
    )
}