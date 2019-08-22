import {
  SUBMIT_REVIEW,READ_REVIEWS,RESET_REVIEW_DATA
} from '../actions/review'


const initialState = { 
  shopReviewsArray: [],
  average: 0,
}

export default (state = initialState, action: { type: any; shopReviewsArray: any; average: any; }) => {
  switch (action.type){
    case SUBMIT_REVIEW:
      return{
        shopReviewsArray: action.shopReviewsArray,
        average: action.average
      }
    case READ_REVIEWS:
      return{
        shopReviewsArray: action.shopReviewsArray,
        average: action.average
      }
    case RESET_REVIEW_DATA:
      return{
        shopReviewsArray: [],
        average: 0
      }
    default:
      return state
  }
}

