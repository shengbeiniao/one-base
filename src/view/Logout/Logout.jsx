import React from 'react';
import BackStretch from '../../component/BackStretch';
import { Link } from 'dva/router';
import style from './style.scss';

function Logout(){
  return (
    <div className={style.container}>
      <BackStretch/>
      <div className={style.main}>
        <div className={style.nav}>
          <h1 style={{marginBottom:'15px'}}>用户已注销</h1>
          <Link to="login">重新登录</Link>
        </div>
      </div>
    </div>
  );
}

Logout.propTypes = {
};

export default Logout;
