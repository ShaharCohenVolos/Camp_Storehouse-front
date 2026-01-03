const initialState = {
    camp: {},
    camps: [],
}

export function campReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_CAMPS':
            newState = { ...state, camps: action.camps }
            break;
        case 'UPDATE_CAMP':
            newState = {
                ...state, camps: state.camps.map(camp =>
                    camp._id === action.camp._id ? action.camp : camp)
            }
            break;
        case 'ADD_CAMP':
            newState = { ...state, camps: [...state.camps, action.camp] }
            break;
        case 'REMOVE_CAMP':
            newState = { ...state, camps: state.camps.filter(camp => camp._id !== action.campId) }
            break;
        case 'SET_CAMP':
            newState = { ...state, camp: action.camp }
    }

    return newState;

}