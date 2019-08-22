import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SearchShopForm from "../components/SearchShopForm"

const SearchShopComponent = () => (
  <React.Fragment>
    <div className="center">
      <Card className="searchShopComponentStyle">
        <CardContent>
          現在地からの半径を選択してください。
          <br/>
          <SearchShopForm />
        </CardContent>
      </Card>
    </div>
  </React.Fragment>
);


export default SearchShopComponent;