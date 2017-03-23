import React, { PropTypes } from 'react';
import {Dropdown,Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import style from './style/header.scss';


class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const Item=Menu.Item;
    const overlay = (
      <Menu style={{padding:'7px'}}>
        <Item>
          <Link to="profile">设置</Link>
        </Item>
        <Menu.Divider />
        <Item>
          <Link to="logout">注销</Link>
        </Item>
      </Menu>
    );
    return (
      <div className={style.header}>
        <div className={style.left}></div>
        <div className={style.profile}>
          <Dropdown overlay={overlay} trigger={['click']}>
            <span className="ant-dropdown-link" href="javascript:;">
              {this.props.name} <Icon type="down" />
            </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
