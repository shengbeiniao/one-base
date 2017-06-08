import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import LeftMenu from './LeftMenu';
import style from './style/leftNav.scss';

function LeftNav({isMainCollapse,toggleMain,currentUser,base}) {
  const leftNavClass=style.nav+(isMainCollapse?' '+style.toggle:'');
  const iconClass=isMainCollapse?'appstore':'appstore-o';

  const toggle=()=>{
    toggleMain(!isMainCollapse);
  };

  return (
    <div className={leftNavClass}>
      <div className={style.top} onClick={toggle}>
        <Icon type={iconClass}/>
        <img src={require('./asset/logo.png')}/>
      </div>
      <div className={style.middle}>
        <LeftMenu collapse={isMainCollapse} base={base}/>
      </div>
      <div className={style.bottom}>
        <div className={style.avatar}>
          <img src={currentUser.avatar?currentUser.avatar:require('./asset/default.png')}/>
        </div>
      </div>
    </div>
  );
}

LeftNav.propTypes = {
};

export default LeftNav;
