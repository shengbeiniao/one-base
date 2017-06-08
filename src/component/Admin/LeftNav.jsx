import React, { PropTypes } from 'react';
import { Menu,Icon } from 'antd';
import { Link } from 'dva/router';
import style from './style/leftNav.scss';

function LeftNav({title,dataSource,currentPath,setCurrentPath,isSubCollapse,toggleSub}){
  const menuClick=(e)=>{
    setCurrentPath(e.key);
  };

  const toggle=()=>{
    toggleSub(!isSubCollapse);
  };

  const renderItem=(item)=>{
    const Item=Menu.Item;
    return <Item key={item.path}><Link to={item.path}>{item.title}</Link></Item>
  };

  const renderSubMenu=(title,children)=>{
    const ItemGroup=Menu.ItemGroup;
    return (
      <ItemGroup key={title} title={title}>
        {
          children.map(item=>{return renderItem(item)})
        }
      </ItemGroup>
    )
  };

  const renderMenu=()=>{
    return dataSource.map(item=>{
      if(item.children){
        return renderSubMenu(item.title,item.children);
      }else{
        return renderItem(item);
      }
    })
  };

  const leftNavClass=style.leftNav+(isSubCollapse?' '+style.toggle:'');
  const iconClass=isSubCollapse?'fa fa-chevron-right':'fa fa-chevron-left';

  return (
    <div className={leftNavClass}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.menuWrapper}>
        <Menu mode="inline"
              selectedKeys={[currentPath]}
              onClick={menuClick}>
          {renderMenu()}
        </Menu>
      </div>
      <div className={style.collapse} onClick={toggle}>
        <div className={style.wrapper}>
          <div className={style.rect}></div>
          <i className={iconClass}></i>
        </div>
      </div>
    </div>
  );
}

LeftNav.propTypes = {
};

export default LeftNav;
