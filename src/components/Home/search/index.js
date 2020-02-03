import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div className="col-md-12">
        <form>
          <div className="form-group">
            <div className="col-md-8">
              <input type="text" className="form-control" id="" placeholder="Input field" />
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
