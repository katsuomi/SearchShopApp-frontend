import * as React from "react"
import { connect } from 'react-redux'

import {submitReview} from "../actions/review"
import Button from '@material-ui/core/Button'
import StarRatingComponent from "react-star-rating-component";
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

interface Props {
  submitReview: (data: {},id: string) => {}
  id: string
}

interface State {
  rating: number
}

class SubmitReview extends React.Component<Props,State>{
  constructor(props: Props){
    super(props)
    this.SubmitReview = this.SubmitReview.bind(this)
    this.ChangeRating = this.ChangeRating.bind(this)
    this.state={
      rating: 0
    }
  }


  SubmitReview(e: any){
    e.preventDefault()
    let data = {
      star: this.state.rating,
      comment: e.target.comment.value,
      shop_id: this.props.id
    }
    this.props.submitReview(data,this.props.id)
    e.target.comment.value = ""
    this.setState({rating: 0})
  }

  ChangeRating( newRating: number) {
    this.setState({
      rating: newRating
    })
  }

  render(){
    return (
      <React.Fragment>
        <Card className="marginTop50px">
          <CardContent>
            <form onSubmit={this.SubmitReview} className="center">
              <p>レビューして下さい</p>
              <div style={{fontSize: "35px"}}>
                <StarRatingComponent
                  value={this.state.rating}
                  starColor="#FFA500"
                  onStarClick={this.ChangeRating}
                  starCount={5}
                  name='rating'
                  emptyStarColor="silver"
                />
              </div>
              <div>
                <TextField  multiline rowsMax="5" label="コメント"  name="comment" type="text" required className="width350px" />
              </div>
              <br/>
              <br/>
              <div>
                {this.state.rating == 0 ?
                  <Button variant="contained" type="submit" color="primary" disabled>
                    送信
                  </Button>
                :
                  <Button variant="contained" type="submit" color="primary">
                    送信
                  </Button>
                }
              </div>
            </form>
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }  
}

const mapDispatchToProps = ({submitReview})

export default connect(null, mapDispatchToProps)(SubmitReview)
