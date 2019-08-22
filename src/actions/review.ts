import axios from 'axios'

export const SUBMIT_REVIEW = 'SUBMIT_REVIEW'
export const READ_REVIEWS = 'READ_REVIEWS'

const RAILS_ROOT_URL = process.env.REACT_APP_RAILS_ROOT_URL

export const submitReview = (data: {},shopId: string) => async (dispatch: (arg0: { type: string; average: number; shopReviewsArray: any[]; }) => void) => {
  await axios.post(`${RAILS_ROOT_URL}/reviews`,{review: data})
  .then((response) => {    
  })
  .catch((data) => {
  })

  let average = 0
  let sum = 0
  let responceArray: never[] = []
  await axios.get(`${RAILS_ROOT_URL}/shop_show?shop_id=${shopId}`)
  .then((response) => {
    responceArray = response.data.data
    response.data.data.map((element: {star: number}) => {
      sum = sum + element.star
    })
    average = sum / response.data.data.length
  })
  .catch((data) => {
  })
  dispatch({type: SUBMIT_REVIEW,average: average,shopReviewsArray: responceArray})
}

export const readReviews = (shopId: string) => async (dispatch: (arg0: { type: string; average: number; shopReviewsArray: any[]; }) => void) => {
  let average = 0
  let sum = 0
  let responceArray: never[] = []
  await axios.get(`${RAILS_ROOT_URL}/shop_show?shop_id=${shopId}`)
  .then((response) => {
    responceArray = response.data.data
    response.data.data.map((element: { star: number; }) => {
      sum = sum + element.star
    })
    average = sum / response.data.data.length
  })
  .catch((data) => {
  })

  dispatch({type: READ_REVIEWS,average: average,shopReviewsArray: responceArray})
}
