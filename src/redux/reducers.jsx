import { PAISA_DALO, PAISA_NIKALO } from "./constants";

const initalState = {
    paisa: 10
}

export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case PAISA_DALO: return {
            ...state,
            paisa: state.paisa + 1
        }
        case PAISA_NIKALO: return {
            ...state,
            paisa:state.paisa - 1
        }
        default: return state
    }
}
