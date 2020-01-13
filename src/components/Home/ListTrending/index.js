import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemTrending from './itemTrending';
import { requestTrending } from '../../../actions';

class ListTrending extends Component {
  componentDidMount = () => {
    this.props.listTrendings();
  }

  renderTrendingList = () => {
    const { listTrending } = this.props;
    return listTrending && listTrending.map((item, index) => <ItemTrending key={index} item={item} />)
  }

  render() {
    const elementTrending = this.renderTrendingList();
    return (
      <div className="row">
        {elementTrending}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  listTrendings: () => {
    dispatch(requestTrending());
  },
});

const mapStateToProps = (state) => ({
  listTrending: state.trendings,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTrending);
