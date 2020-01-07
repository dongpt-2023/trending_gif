import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemTrending from './itemTrending';
import * as actions from '../../../actions';

class ListTrending extends Component {
    componentDidMount = () => {
      this.props.onFetchTrending();
    }

    render() {
      const { listTrending } = this.props;
      const elementTrending = listTrending.map((item, index) => <ItemTrending key={index} item={item} />);
      return (
        <div className="row">
          {elementTrending}
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  listTrending: state.trendings,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchTrending:() => {
      dispatch(actions.fetchTrendingRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTrending);
