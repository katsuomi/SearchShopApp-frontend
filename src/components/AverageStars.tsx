import * as React from "react"
import axios from 'axios'

const RAILS_ROOT_URL = process.env.REACT_APP_RAILS_ROOT_URL

interface Props{
  id: string
}
interface State{
  average: any
}

class AverageStars extends React.Component<Props,State>{
  constructor(props: Props){
    super(props)
    this.state={
      average: 0
    }
  }
  async componentDidMount(){
    let average = 0
    let sum = 0
    await axios.get(`${RAILS_ROOT_URL}/shop_show?shop_id=${this.props.id}`)
    .then((response) => {
      response.data.data.map((element: { star: number; }) => {
        sum = sum + element.star
      })
      average = sum / response.data.data.length
      this.setState({average: average})
    })
  }
  render(){
    return (
      <React.Fragment>
        <div className="star-rating">
          {this.state.average === NaN ?
            <div className="star-rating-front" style={{width: "0%"}}>★★★★★</div>
          :
            <div className="star-rating-front" style={{width: this.state.average/5*100+"%"}}>★★★★★</div>
          } 
          <div className="star-rating-back">★★★★★</div>     
        </div>
      </React.Fragment>
    )
  }  
}

export default AverageStars