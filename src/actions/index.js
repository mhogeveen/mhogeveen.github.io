import { TOGGLE_MENU, UPDATE_POS } from './types'

export const toggleMenu = () => {
   return {
      type: TOGGLE_MENU,
   }
}

export const updatePos = (payload) => {
   return {
      type: UPDATE_POS,
      payload,
   }
}
