import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestLogin } from '../../actions/index';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      txtName: '',
      txtPassword: '',
    };
  }

  onChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { txtName: userName, txtPassword: password } = this.state;
    const infor = {
      userName,
      password,
    };
    this.props.requestLogin(infor);
  }

  render() {
    const { txtName, txtPassword } = this.state;
    const { onLogin } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form onSubmit={this.onSubmit}>
              <legend>Form Login</legend>

              <div className="form-group">
                <label> User Name </label>
                <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
              </div>

              <div className="form-group">
                <label> Password </label>
                <input type="password" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onChange} />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestLogin: (infor) => {
    dispatch(requestLogin(infor));
  },
});

const mapStateToProps = (state) => ({
  onLogin: state.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
