import React from 'react';
import BackStretch from '../../component/BackStretch';
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
            <h1>404</h1>
          </div>
          <div className={style.nav}>
            <a href="/">返回首页</a>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
};

export default Login;
