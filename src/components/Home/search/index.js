import React, { Component } from 'react';
// Use Formik
import { withFormik } from 'formik';

// Use validation
import { searchInputValidation } from './validation';

class SearchForm extends Component {
  render() {
    const { handleBlur, handleChange, handleSubmit } = this.props;
    return (
      <div className="col-md-12">
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <input
              id="keySearch"
              name="keySearch"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={this.props.values.keySearch}
            />
            {this.props.touched.keySearch && this.props.errors.keySearch ? (
              <div>{this.props.errors.keySearch}</div>
            ) : null}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    keySearch: ''
  }),
  validationSchema: searchInputValidation,
  handleSubmit: (values, { setSubmitting, props }) => {
    props.Search(values.keySearch);
    setSubmitting(false);
  },
})(SearchForm);
