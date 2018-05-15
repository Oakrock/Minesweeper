
export const selectSquare = (square, currBoard) => {

    square.hasBeenSelected = true

    if (square.minesNear < 1)
    {
        getNearbySquares(currBoard, square.id, Math.sqrt(currBoard.length))
            .filter(x => !x.hasBeenSelected)
            .forEach(x => selectSquare(x, currBoard))
    }

    return currBoard.slice()
}

export const createBoard = (size, mineCount) => {

    const board = [...Array(size * size).keys()].map(index => ({
        id: index,
        isMine: false,
        minesNear: 0,
        isFlagged: false,
        hasBeenSelected: false
    }));

    return addMines(board, size, mineCount);
}

const addMines = (board, size, mineCount) => {
    let addedMines = 0;

    while (addedMines < mineCount)
    {
        const index = Math.floor(Math.random() * (size * size));

        const square = board[index];

        if (!square.isMine)
        {
            addedMines++;
            square.isMine = true;
            board = incrementNearbySquares(board, index, size);
        }
    }

    return board.slice();
}

const getNearbySquares = (board, index, size) => {
    const nearbySquares = [
        index - (size + 1),
        index - size,
        index - (size - 1),
        index - 1,
        index + 1,
        index + (size -1),
        index + (size),
        index + (size +1)
    ];

    const mineRowAndColumn = calculateRowAndColumn(index, size);

    return nearbySquares.filter(nearMine => {
        const nearByRowAndColumn = calculateRowAndColumn(nearMine, size);

        const columnDiff = Math.abs(nearByRowAndColumn.column - mineRowAndColumn.column);
        const rowDiff = Math.abs(nearByRowAndColumn.row - mineRowAndColumn.row);

        const arraySize = (size * size);

        return (nearMine > -1 && nearMine < arraySize &&
            ((columnDiff === 1 && rowDiff === 1) ||
                (columnDiff === 0 && rowDiff === 1) ||
                (columnDiff === 1 && rowDiff === 0)))
    }).map(nearIndex => board[nearIndex])
}

const incrementNearbySquares = (board, index, size) => {

    if (size < 3)
        return board.slice().map(x => x.minesNear++);

    getNearbySquares(board, index, size).forEach(square => square.minesNear++)

    return board.slice();
}

const calculateRowAndColumn = (index, size) => ({row: Math.floor(index/size), column: index % size})