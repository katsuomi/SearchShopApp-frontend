import {
  SEARCH_NEAR_SHOPS,GO_NEXT_PAGINATION,SEARCH_SHOP_FROM_ID
} from '../actions/search'


interface State {
  resultShopsArray: string[] | number[],
  resultOneShop?: string[] | number[],
  paginationCount: number,
  range: number,
}

const initialState: State = { 
  resultShopsArray: [],
  resultOneShop: [],
  paginationCount: 1,
  range: 1,
}

export default (state = initialState, action: { type: string; resultShopsArray: string[] | number[]; paginationCount: number; range: number; resultOneShop: string[] | number[]; }) => {
  switch (action.type){
    case SEARCH_SHOP_FROM_ID:
      return {
        resultOneShop: action.resultOneShop,
        resultShopsArray: [],
        paginationCount: 1,
        range: 1
      }
    case SEARCH_NEAR_SHOPS:
    case GO_NEXT_PAGINATION:
      return {
        resultShopsArray: action.resultShopsArray,
        paginationCount: action.paginationCount,
        range: action.range
      }
    default:
      return state
  }
}

