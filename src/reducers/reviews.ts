import {
  SUBMIT_REVIEW,READ_REVIEWS
} from '../actions/review'


const initialState = { 
  shopReviewsArray: [],
  average: 0,
}

export default (state = initialState, action: { type: any; shopReviewsArray: any; average: any; }) => {
  switch (action.type){
    case SUBMIT_REVIEW:
    case READ_REVIEWS:
      return{
        shopReviewsArray: action.shopReviewsArray,
        average: action.average
      }
    default:
      return state
  }
}

