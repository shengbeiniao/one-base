import React, { PropTypes } from 'react';
import { Menu,Icon } from 'antd';
import { Link } from 'dva/router';
import style from './style/leftNav.scss';

class LeftNav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      currentPath:props.currentPath
    };
  }

  menuClick=(e)=>{
    this.setState({
      currentPath:e.key
    });
  };

  toggle=()=>{
    this.setState(prev=>({
      collapse:!prev.collapse
    }));
  };

  renderItem=(item)=>{
    const Item=Menu.Item;
    return <Item key={item.path}><Link to={item.path}>{item.title}</Link></Item>
  };

  renderSubMenu=(title,children)=>{
    const ItemGroup=Menu.ItemGroup;
    return (
      <ItemGroup key={title} title={title}>
        {
          children.map(item=>{return this.renderItem(item)})
        }
      </ItemGroup>
    )
  };

  renderMenu=()=>{
    return this.props.dataSource.map(item=>{
      if(item.children){
        return this.renderSubMenu(item.title,item.children);
      }else{
        return this.renderItem(item);
      }
    })
  };

  render(){
    const leftNavClass=style.leftNav+(this.state.collapse?' '+style.toggle:'');
    const iconClass=this.state.collapse?'fa fa-chevron-right':'fa fa-chevron-left';
    return (
      <div className={leftNavClass}>
        <h3 className={style.title}>{this.props.title}</h3>
        <div className={style.menuWrapper}>
          <Menu mode="inline"
                defaultOpenKeys={this.props.defaultOpenKeys}
                selectedKeys={[this.state.currentPath]}
                onClick={this.menuClick}>
            {this.renderMenu()}
          </Menu>
        </div>
        <div className={style.collapse} onClick={this.toggle}>
          <div className={style.wrapper}>
            <div className={style.rect}></div>
            <i className={iconClass}></i>
          </div>
        </div>
      </div>
    );
  }
}

LeftNav.propTypes = {
};

export default LeftNav;
