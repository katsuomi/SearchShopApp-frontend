import * as React from "react"
import { connect } from 'react-redux'
import {goNextPagination} from "../actions/search"
import Pagination from 'react-js-pagination'

interface Props {
  goNextPagination: (range: number,e: any) => void
  range: number
  resultShopsArray: []
  paginationCount: number
}

interface State {
  activePage: number
}


class PaginationButtons extends React.Component<Props,State>{
  constructor(props: Props){
    super(props)
    this.Click = this.Click.bind(this)
    this.state = {
      activePage: 1
    }
  }

  Click(e: number){
    this.setState({
      activePage: e
    })
    this.props.goNextPagination(this.props.range,e)
  }

  render(){
    return(
      <React.Fragment>
        <div className="marginTop50px center">
          {this.props.resultShopsArray.length !== 0 ?
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={10}
              totalItemsCount={this.props.paginationCount}
              pageRangeDisplayed={5}
              onChange={this.Click}
              itemClass='page-item'
              linkClass='page-link'
            />
          :
            <div></div>
          }
        </div> 
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = ({goNextPagination})
const mapStateToProps = (state: {shops: {resultShopsArray: [],paginationCount: number,range: number}}) => ({resultShopsArray: state.shops.resultShopsArray,paginationCount: state.shops.paginationCount,range: state.shops.range})
export default connect(mapStateToProps,mapDispatchToProps)(PaginationButtons)
