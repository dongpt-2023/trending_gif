import { connect } from 'react-redux';
import Search from '../components/Home/search';

// Use Action
import { searchGif } from '../actions/index';

const mapStateToProps = (state) => ({
  state: state.searchs,
});

const mapDispatchToProps = (dispatch) => ({
  Search: (key) => {
    dispatch(searchGif(key));
  },
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
