import * as React from "react";
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


interface Props {
  id: string
  shopReviewsArray: []
}

class ReadReviews extends React.Component<Props,{}>{
  render(){
    return (
      <React.Fragment>
        {
          this.props.shopReviewsArray.map((review: {star: number,comment: string},i: number) => (
            <Card className="marginTop50px" key={i}>
              <CardContent>
                <div className="star-rating">
                  <div className="star-rating-front" style={{width: review.star/5*100+"%" }}>★★★★★</div>
                  <div className="star-rating-back">★★★★★</div>    
                </div>   
                <p>{review.comment}</p>
              </CardContent>
            </Card>
          ))
        } 
      </React.Fragment>
    )
  }  
}

const mapStateToProps = (state: {reviews: {shopReviewsArray: []}}) => ({shopReviewsArray: state.reviews.shopReviewsArray})

export default connect(mapStateToProps, null)(ReadReviews)
