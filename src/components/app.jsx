import React from 'react';
import CityList from '../containers/city_list';
import City from '../containers/city';

// TODO: remove this line and use Redux
const App = () => {
  return (
    <div className="app">
      <CityList />
      <City />
    </div>
  );
};

export default App;
