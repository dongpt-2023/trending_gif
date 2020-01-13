import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemTrending from './itemTrending';
import * as actions from '../../../actions';

class ListTrending extends Component {
  render() {
    const elementTrending = this.renderTrendingList();
    return (
      <div className="row">
        {elementTrending}
      </div>
    );
  }

  componentDidMount = () => {
    this.props.listTrendings();
  }

  renderTrendingList = () => {
    const { listTrending } = this.props;
    let result = null;
    if (listTrending.length > 0) {
      result = listTrending.map((item, index) => (
        <ItemTrending key={index} item={item} />
      ));
    }
    return result;
  }
}

const mapDispatchToProps = (dispatch) => ({
  listTrendings: () => {
    dispatch(actions.requestTrending());
  },
});

const mapStateToProps = (state) => ({
  listTrending: state.trendings,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTrending);
