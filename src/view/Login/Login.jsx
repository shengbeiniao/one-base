import React from 'react';
import BackStretch from '../../component/BackStretch';
import {Link} from 'dva/router';
import Cookies from 'js-cookie';
import style from './style.scss';

class Login extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={style.container}>
        <BackStretch/>
        <div className={style.main}>
          <div>
            <img src={require('./asset/logo.png')}/>
          </div>
          <div className={style.nav}>
            <Link to="/">首页</Link>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
};

export default Login;
