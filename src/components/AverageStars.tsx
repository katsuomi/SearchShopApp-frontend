import * as React from "react"
import { connect } from 'react-redux'
import {} from "../actions/review"

interface Props {
  average: number
}

interface State {
  reviews: {average: number}
}

class AverageStars extends React.Component<Props,State>{
  render(){
    return (
      <React.Fragment>
        <div className="star-rating">
          {this.props.average === NaN ?
            <div className="star-rating-front" style={{width: "0%"}}>★★★★★</div>
          :
            <div className="star-rating-front" style={{width: this.props.average/5*100+"%"}}>★★★★★</div>
          } 
          <div className="star-rating-back">★★★★★</div>     
        </div>
      </React.Fragment>
    )
  }  
}

const mapStateToProps = (state: State) => ({average: state.reviews.average})
export default connect(mapStateToProps,null)(AverageStars)
