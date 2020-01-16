import React, { Component } from 'react';

import SearchForm from '../../containers/SearchContainer';
import ListTrending from './ListTrending';

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchForm />
        </div>
        <div className="row">
          <ListTrending />
        </div>
      </div>
    );
  }
}
