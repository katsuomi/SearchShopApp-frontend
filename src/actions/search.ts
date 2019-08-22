import axios from 'axios'
import { Dispatch } from 'redux';

export const SEARCH_NEAR_SHOPS = 'SEARCH_NEAR_SHOPS'
export const GO_NEXT_PAGINATION = 'GO_NEXT_PAGINATION'
export const SEARCH_SHOP_FROM_ID = 'SEARCH_SHOP_FROM_ID'
export const SEARCH_RESULTS_DISPLAY_ON = 'SEARCH_RESULTS_DISPLAY_ON'
export const SEARCH_RESULTS_DISPLAY_OFF = 'SEARCH_RESULTS_DISPLAY_OFF'

const GURUNAVI_ROOT_URL = process.env.REACT_APP_GURUNAVI_ROOT_URL || ''
const API_KEY = process.env.REACT_APP_API_KEY

export const searchResultsDiplayOn = () => (dispatch: Dispatch)=>{
  dispatch({type: SEARCH_RESULTS_DISPLAY_ON,searchResultsDiplayOn: true})
}

export const searchResultsDiplayOff = () => (dispatch: Dispatch)=>{
  dispatch({type: SEARCH_RESULTS_DISPLAY_OFF,searchResultsDiplayOn: false})
}

export const searchNearShops = (range: number) => (dispatch: Dispatch)=>{
  navigator.geolocation.getCurrentPosition(function(position){
    axios.get(GURUNAVI_ROOT_URL,{
      params: {
        keyid: API_KEY,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        range: range,
        offset_page: 1
      }
    })
    .then((result: { data: { total_hit_count: number,rest: any}})=>{
      let paginationCount = Math.ceil(result.data.total_hit_count / 10)
      dispatch({type: SEARCH_NEAR_SHOPS,resultShopsArray: result.data.rest,paginationCount: paginationCount,range: range})
    })
  })
}

export const searchShopFromId = (id: string) => async (dispatch: Dispatch)=>{
  await axios.get(`${GURUNAVI_ROOT_URL}?keyid=${API_KEY}&id=${id}`)
  .then((result) => {
    dispatch({type: SEARCH_SHOP_FROM_ID, resultOneShop: result.data.rest[0]})
  })
}

export const goNextPagination = (range: number,pageCount: any) => async (dispatch: Dispatch)=>{
  await navigator.geolocation.getCurrentPosition(function(position){
    axios.get(GURUNAVI_ROOT_URL,{
      params: {
        keyid: API_KEY,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        range: range,
        offset_page: pageCount
      }
    })
    .then((result: { data: { total_hit_count: number; rest: any; }; }) => {
      let paginationCount = Math.ceil(result.data.total_hit_count / 10)
      dispatch({type: GO_NEXT_PAGINATION,resultShopsArray: result.data.rest,paginationCount: paginationCount,range: range})
    })
  })
}

