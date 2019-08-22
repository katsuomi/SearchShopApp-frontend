import * as React from "react"
import { connect } from 'react-redux'
import {searchShopFromId} from "../actions/search"
import {readReviews} from "../actions/review"
import SubmitReview from "./SubmitReview"
import ReadReviews from "./ReadReviews"
import AverageStars from "./AverageStars"

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'


interface Props {
  id: string
  searchShopFromId: (id: string) => Promise<void>
  readReviews: (id: string) => void
  resultOneShop: {name: string,image_url: {shop_image1: string},address: string,tel: string,opentime: string}
}

class ShopProfile extends React.Component<Props,{}>{
  async componentDidMount(){
    await this.props.searchShopFromId(this.props.id)
    await this.props.readReviews(this.props.id)
  }

  render(){
    return(
      <React.Fragment>
        {this.props.resultOneShop ?
          <div>
            <Card className="marginTop100px">
              <CardContent className="positionRelative">
                <p className="bold">{this.props.resultOneShop.name}</p> 
                {this.props.resultOneShop.image_url && this.props.resultOneShop.image_url.shop_image1 ?
                  <img src={this.props.resultOneShop.image_url.shop_image1} alt="shop_image" width="100%"/> 
                :
                  <img src={`${process.env.PUBLIC_URL}/images/noImage.png`} alt="shop_image" width="100%"/>
                }
                <p>{this.props.resultOneShop.address}</p>
                <a className="positionAbsolute" style={{bottom: "5px",right: "10px"}} href={"tel:"+this.props.resultOneShop.tel}>
                  <Button type="submit" variant="contained" color="primary" >
                    <i className="material-icons">
                      local_phone
                    </i>
                  </Button>
                </a>
                <p className="center">{this.props.resultOneShop.opentime}</p> 
                <AverageStars id={this.props.id}/>
              </CardContent>
            </Card>
            <SubmitReview id={this.props.id} />
            <ReadReviews id={this.props.id} />

          </div>
        :
          <div></div>
        }
      </React.Fragment>        
    )
  }
}


const mapDispatchToProps = ({searchShopFromId,readReviews})
const mapStateToProps = (state: {shops: {resultOneShop: {name: string,image_url: {shop_image1: string},address: string,tel: string,opentime: string}}}) => ({resultOneShop: state.shops.resultOneShop}) 
export default connect(mapStateToProps, mapDispatchToProps)(ShopProfile)


