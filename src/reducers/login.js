import { toast } from 'react-toastify';
import * as Types from '../constants/ActionTypes';

const intialState = {
  txtName: '',
  txtPassword: '',
};

const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      if (action.infor.userName === 'Admin' && action.infor.password === 'Admin') {
        toast.success('Login Success, please F5 to Load again page !', {
          position: toast.POSITION.TOP_CENTER,
        });
        localStorage.setItem('check_login', JSON.stringify(action.infor));
      } else {
        toast.error('Username or password incorrect !', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    default:
      return state;
  }
};

export default loginReducer;
