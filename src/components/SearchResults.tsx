import * as React from "react"
import { connect } from 'react-redux'
import Spinner from "../presentationalComponents/Spinner"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import {Link} from "react-router-dom"
import {searchResultsDiplayOff} from "../actions/search"
import DisplayOnGoogleMaps from './DisplayOnGoogleMaps';

interface Props{
  searchResultsDiplayOff: () => void
  resultShopsArray: []
  searchResultsDiplayOn: boolean
}

class SearchResults extends React.Component<Props,{}>{
  componentDidMount(){
    this.props.searchResultsDiplayOff()
  }
  render(){
    return(
      <React.Fragment>
        <div className="marginTop50px">
          {this.props.searchResultsDiplayOn ?
            this.props.resultShopsArray.length !== 0 ?
              <div>
                <DisplayOnGoogleMaps />
                {this.props.resultShopsArray.map((shop: {name: string,id: number,image_url: {shop_image1: string},access: {station: string,line: string,station_exit: string,walk: string}},i: number) =>(
                  <Link to={"/shops/"+shop.id} key={i} >
                    <Card className="shopCardStyle">
                      <CardContent>
                        <Grid container>
                          <Grid item xs={3} >
                            {shop.image_url.shop_image1 ? 
                              <img src={shop.image_url.shop_image1} alt="shop_image" width="100%" height="100%" />
                            :
                              <img src={`${process.env.PUBLIC_URL}/images/noImage.png`} alt="shop_image" width="100%" height="100%" />
                            }
                          </Grid>
                          <Grid item xs={1}></Grid>
                          <Grid item xs={8}>
                            <p className="shopTitleBlueColor">{shop.name}</p>
                            <p>
                              {shop.access.station}{shop.access.line}{shop.access.station_exit}
                              {shop.access.walk ?
                                "徒歩"+shop.access.walk.replace(/[^0-9]/g, "")+"分"
                              :
                                ""
                              }
                            </p>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
           :
            <Spinner />
          : 
            <div></div>
          }
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state: {displays: {searchResultsDiplayOn: boolean},shops: {resultShopsArray: []}}) => ({searchResultsDiplayOn: state.displays.searchResultsDiplayOn,resultShopsArray: state.shops.resultShopsArray})
const mapDispatchToProps = ({searchResultsDiplayOff})

export default connect(mapStateToProps,mapDispatchToProps)(SearchResults)

