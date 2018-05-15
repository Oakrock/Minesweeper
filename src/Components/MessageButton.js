import React from 'react'

const MessageButton = ({ message, size, mineCount, onClick, messageButtonValue}) => (
    <div>
        <h1>{message}</h1>
        <button
            onClick={() => {onClick(size, mineCount)}}
        >
            {messageButtonValue}
        </button>
    </div>
);

export default MessageButton