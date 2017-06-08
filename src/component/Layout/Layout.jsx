import React,{PropTypes} from 'react';
import {connect} from 'dva';
import Header from './Header';
import LeftNav from './LeftNav';
import style from './style/layout.scss';

function Layout({dispatch,children,route,layoutProps,userProps}) {
  const {isMainCollapse}=layoutProps;
  const {currentUser}=userProps;
  const {base}=route;

  const toggleMain=(isMainCollapse)=>{
    dispatch({
      type:'base.layout/toggle',
      payload:{
        isMainCollapse:isMainCollapse
      }
    });
    dispatch({
      type:'base.layout/setContentWidth'
    })
  };

  const leftNavProps={isMainCollapse,toggleMain,currentUser,base};

  return (
    <div className={style.layout}>
      <div className={style.leftNav}>
        <LeftNav {...leftNavProps}/>
      </div>
      <div className={style.main}>
        <div className={style.header}>
          <Header name={currentUser.realName}/>
        </div>
        <div className={style.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
};


function mapStateToProps({'base.layout':layoutState,'base.user':userState}) {
  return {layoutProps:layoutState,userProps:userState};
}

export default connect(mapStateToProps)(Layout);
