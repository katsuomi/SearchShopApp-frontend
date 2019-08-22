import * as React from "react";
import { connect } from 'react-redux'
import {searchNearShops,searchResultsDiplayOn} from "../actions/search"
import {resetReviewData} from "../actions/review"
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

interface Props{
  resetReviewData: () => void
  searchResultsDiplayOn: () => void
  searchNearShops: (radius: number) => void
}

interface State{
  radius: number
}

class SearchShopForm extends React.Component<Props,State>{
  constructor(props: Props){
    super(props)
    this.state={
      radius: 0,
    }
    this.onChangeRadius = this.onChangeRadius.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  async componentDidMount(){
    await this.props.resetReviewData()
  }

  async onChangeRadius(e: any){
    await this.setState({radius: e.target.value })
  }

  async onClick(){
    await this.props.searchResultsDiplayOn()
    await this.props.searchNearShops(this.state.radius)
  }


  render(){
    return(
      <React.Fragment>
        <FormControl className="width200px"> 
          <InputLabel>半径の選択</InputLabel> 
          <Select value={this.state.radius} onChange={this.onChangeRadius}>
            <MenuItem value="">
              <em>選択なし</em>
            </MenuItem>
            <MenuItem value={1}>300m</MenuItem>
            <MenuItem value={2}>500m</MenuItem>
            <MenuItem value={3}>1000m</MenuItem>
            <MenuItem value={4}>2000m</MenuItem>
            <MenuItem value={5}>3000m</MenuItem>
          </Select>
        </FormControl> 
        <br/>
        {this.state.radius ?
          <Button style={{marginTop: "20px"}} onClick={this.onClick} type="submit" variant="contained" color="primary" >
            検索
          </Button>
        :    
          <Button style={{marginTop: "20px"}} type="submit" variant="contained" color="primary" disabled >
            検索
          </Button>
        }   
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = ({searchNearShops,searchResultsDiplayOn,resetReviewData})

export default connect(null, mapDispatchToProps)(SearchShopForm)
