import useGrid from "../hooks/useGrid"
import Block from "./block";

export default function Grid({ length = 10, dimension = 2 }) {

    const grid = useGrid(length, dimension);

    return (
        <div className="grid" style={{
            display: "flex",
            flexWrap: "wrap",
            width: `${(length * 56)}px`,
            height: `${(length * 56)}px`
        }}>
            {grid.map((data, index) => {
                return <Block data={data} key={index} />
            })}
        </div>
    )
}