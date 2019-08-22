import * as React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { connect } from 'react-redux'
const { compose, withStateHandlers } = require("recompose");
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''


interface Props{
  resultShopsArray: []
}

interface State{
  lat: number,
  lng: number
}

class DisplayOnGoogleMaps extends React.Component<Props,State>{
  constructor(props: Props){
    super(props)
    this.state={
      lat: 0,
      lng: 0
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position: Position) => {
      const lat = Number(position.coords.latitude)
      const lng = Number(position.coords.longitude)
      this.setState({lat: lat,lng: lng})
    })
  }
  render(){
    const MapWithAMakredInfoWindow = compose(
      withStateHandlers(() => ({
        isOpen: false,
      }), {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen,
        })
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={21}
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng}}
      >
        {this.props.resultShopsArray.map((shop: {latitude: string,longitude: string,name: string,id: number,image_url: {shop_image1: string},access: {station: string,line: string,station_exit: string,walk: string}},i: number) =>(
          <Marker
            key={i}
            position={{lat: Number(shop.latitude),lng: Number(shop.longitude)}}
            onClick={props.onToggleOpen}
          >
            {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                <p className="shopTitleBlueColor">{shop.name}</p>
                <img src={shop.image_url.shop_image1} width="200" height="200" />
              </div>
            </InfoWindow>}
          </Marker>
        ))}
        <Marker
          position={{lat: this.state.lat,lng: this.state.lng}}
          onClick={props.onToggleOpen}
          icon="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
        >
          {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
              <p>現在地</p>
            </div>
          </InfoWindow>}
        </Marker>
      </GoogleMap>
    )
    return(
      <React.Fragment>
        <div className="center" style={{width: "100%",maxWidth: "1000px"}}>
          <MapWithAMakredInfoWindow
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`}
            loadingElement={<div style={{ height: "100%"}} />}
            containerElement={<div style={{ height: "400px"}} />}
            mapElement={<div style={{ height: "100%"}} />}
          />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: {shops: {resultShopsArray: []}}) => ({resultShopsArray: state.shops.resultShopsArray})

export default connect(mapStateToProps,null)(DisplayOnGoogleMaps)



