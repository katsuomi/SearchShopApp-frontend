import React from "react"
import Loader from 'react-loader-spinner'

const Spinner = () => (
  <div className="center">
    <Loader 
      type="Oval"
      color="rgb(187, 187, 187)"
      height={200}	
      width={200}
    />  
  </div>  
);


export default Spinner;
