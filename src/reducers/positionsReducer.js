import { UPDATE_POS } from '../actions/types'

const initialState = {
   home: false,
   over: false,
   portfolio: false,
   contact: false,
}

export default (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_POS:
         return { ...initialState, [action.payload]: true }
      default:
         return state
   }
}
