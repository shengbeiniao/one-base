import React, { PropTypes } from 'react';
import {connect} from 'dva';
import LeftNav from './LeftNav';
import style from './style/admin.scss';

function Admin({dispatch,children,route,layoutProps}) {
  const title=route.title;
  const dataSource =route.dataSource;

  const {isSubCollapse,contentWidth,currentPath}=layoutProps;

  if(currentPath===''){
    dispatch({
      type:'base.layout/setCurrentPath',
      payload:{
        currentPath:location.pathname
      }
    })
  }

  const setCurrentPath=(currentPath)=>{
    dispatch({
      type:'base.layout/setCurrentPath',
      payload:{
        currentPath:currentPath
      }
    })
  };

  const toggleSub=(isSubCollapse)=>{
    dispatch({
      type:'base.layout/toggle',
      payload:{
        isSubCollapse:isSubCollapse
      }
    });
    dispatch({
      type:'base.layout/setContentWidth'
    })
  };

  let leftNavProps={title,dataSource,currentPath,setCurrentPath,isSubCollapse,toggleSub};

  return (
    <div className={style.layout}>
      <div className={style.left}>
        <LeftNav {...leftNavProps}/>
      </div>
      <div className={style.right}>
        <div className={style.content} style={{width:contentWidth}}>
          {children}
        </div>
      </div>
    </div>
  );
}


function mapStateToProps({'base.layout':layoutState}) {
  return {layoutProps:layoutState};
}

export default connect(mapStateToProps)(Admin);
