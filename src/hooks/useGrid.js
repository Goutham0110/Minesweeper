export default function useGrid(length, dimension, bombs = 10) {

    /** init grid array */
    const [grid, gridLength] = initGrid(length, dimension);

    /** get bomb coordinates */
    const bombIndexes = getBombs(grid, bombs);


    /** insert clue numbers */
    const surroundingIndexes = getSurroundingIndexes(bombIndexes, length, gridLength);

    for (let index of surroundingIndexes) {
        if (index === false || index < 0 || index >= gridLength || grid[index]['value'] === "bomb") continue;
        grid[index]['value'] = grid[index]['value'] + 1;
    }

    return grid;
}

function initGrid(length, dimension) {
    const grid = [];
    let gridLength = length;
    for (let i = 1; i < dimension; i++) gridLength *= length;
    for (let element = 0; element < gridLength; element++) grid.push({ value: 0 });
    return [grid, gridLength]
}

function getBombs(grid, bombs) {
    const bombIndexes = [];
    while (bombIndexes.length < bombs) {
        const bombIndex = getRandomNumber();
        if (bombIndexes.includes(bombIndex)) continue;
        bombIndexes.push(bombIndex)
        grid[bombIndex]['value'] = "bomb";
    }
    return bombIndexes;
}

function getSurroundingIndexes(bombIndexes, length, gridLength) {
    const surroundingIndexes = [];
    const edge = EdgeFinder(length, gridLength);

    for (let bombIndex of bombIndexes) {
        const surroundingIndex = {
            topLeft: false,
            top: false,
            topRight: false,
            left: false,
            right: false,
            bottomLeft: false,
            bottom: false,
            bottomRight: false
        };

        surroundingIndex.topLeft =
            !(edge.isTop(bombIndex) || edge.isLeft(bombIndex)) &&
            ((bombIndex - 1) - length);
        surroundingIndex.top =
            !(edge.isTop(bombIndex)) &&
            (bombIndex - length);
        surroundingIndex.topRight =
            !(edge.isTop(bombIndex) || edge.isRight(bombIndex)) &&
            ((bombIndex + 1) - length);
        surroundingIndex.left =
            !(edge.isLeft(bombIndex)) &&
            (bombIndex - 1);
        surroundingIndex.right =
            !(edge.isRight(bombIndex)) &&
            (bombIndex + 1);
        surroundingIndex.bottomLeft =
            !(edge.isBottom(bombIndex) || edge.isLeft(bombIndex)) &&
            ((bombIndex - 1) + length);
        surroundingIndex.bottom =
            !(edge.isBottom(bombIndex)) &&
            (bombIndex + length);
        surroundingIndex.bottomRight =
            !(edge.isBottom(bombIndex) || edge.isRight(bombIndex)) &&
            ((bombIndex + 1) + length);

        surroundingIndexes.push(...Object.values(surroundingIndex));
    }
    return surroundingIndexes;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function EdgeFinder(length, gridLength) {
    return {
        isTop: (index) => {
            return (index - length) < 0;
        },
        isBottom: (index) => {
            return (index + length) >= gridLength;
        },
        isRight: (index) => {
            return !((index + 1) % length);
        },
        isLeft: (index) => {
            return !(index % length);
        }
    }
}