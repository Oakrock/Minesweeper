import React from 'react'

function Square ({onClick, onRightClick, value, size}) {

    const squareStyle = { width: 'calc(100% * (1/' + size + '))'}

    return (
        <button className="square" style={squareStyle} onClick={() => onClick()} onContextMenu={(e) => {onRightClick(); e.preventDefault();}}>
            {value}
        </button>
    );
}



export default Square