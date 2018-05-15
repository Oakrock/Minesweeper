
const defaultDetails = {
    size: 10,
    mineCount: 10
}

const boardDetails = (state = defaultDetails, action) => {
    switch(action.type)
    {
        case "SET_SIZE_DETAIL":
            return {...state, size: action.size}
        case "SET_MINE_COUNT_DETAIL":
            return {...state, mineCount: action.mineCount}
        default:
            return state
    }
}

export default boardDetails;