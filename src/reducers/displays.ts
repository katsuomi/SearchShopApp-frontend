import {
  SEARCH_RESULTS_DISPLAY_ON,SEARCH_RESULTS_DISPLAY_OFF
} from '../actions/search'


const initialState = { 
  searchResultsDiplayOn: false
}

export default (state = initialState, action: { type: any; searchResultsDiplayOn: any; }) => {
  switch (action.type){
    case SEARCH_RESULTS_DISPLAY_ON:
    case SEARCH_RESULTS_DISPLAY_OFF:
      return {
        searchResultsDiplayOn: action.searchResultsDiplayOn,
      }
    default:
      return state
  }
}

