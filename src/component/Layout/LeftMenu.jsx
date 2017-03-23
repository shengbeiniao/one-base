import React, { PropTypes } from 'react';
import {Tooltip} from 'antd';
import style from './style/leftMenu.scss';
import menu from '../../menu';

class LeftMenu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      toggleKey:'0',
      currentKey:'0'
    };

    this.dataSource=menu;
  }

  componentDidMount() {
    this.dataSource.forEach(item=>{
      item.children.forEach(subItem=>{
        if(subItem.link===this.props.base){
          this.setState({
            toggleKey:item.key,
            currentKey:subItem.key
          });
        }
      });
    });
  };

  toggle=(item)=>{
    let toggleKey='0';
    if(this.state.toggleKey!=item.key){
      toggleKey=item.key;
    }
    this.setState({
      toggleKey:toggleKey
    });
  };

  renderItem=(item)=>{
    const iconClass=item=>this.state.toggleKey==item.key?'fa fa-caret-down':'fa fa-caret-right';
    if(this.props.collapse){
      return (
        <Tooltip placement="right" title={item.title}>
          <div className={style.item} onClick={e=>this.toggle(item)}>
            <i className={iconClass(item)}></i>
            <span>{item.title}</span>
          </div>
        </Tooltip>
      )
    }else{
      return (
        <div className={style.item} onClick={e=>this.toggle(item)}>
          <i className={iconClass(item)}></i>
          <span>{item.title}</span>
        </div>
      )
    }
  };

  renderSubItem=(subItem)=>{
    const itemClass=style.item+(this.state.currentKey==subItem.key?' '+style.active:'');
    if(this.props.collapse){
      return (
        <Tooltip key={subItem.key} placement="right" title={subItem.title}>
          <li className={itemClass}>
            <a href={subItem.link}>
              <i className={subItem.icon}></i>
              <span>{subItem.title}</span>
            </a>
          </li>
        </Tooltip>
      )
    }else{
      return (
        <li  key={subItem.key} className={itemClass}>
          <a href={subItem.link}>
            <i className={subItem.icon}></i>
            <span>{subItem.title}</span>
          </a>
        </li>
      )
    }
  };

  render(){
    const leftMenuClass=style.menu+(this.props.collapse?' '+style.toggle:'');

    const subMenuHeight=item=>this.state.toggleKey==item.key?(item.children.length*50+'px'):0;
    const tooltipStyle={'display':this.props.collapse?'block':'none'};
    return (
      <ul className={leftMenuClass}>
        {
          this.dataSource.map(item=>{
            return (
              <li key={item.key}>
                {this.renderItem(item)}
                <ul className={style.subMenu} style={{height:subMenuHeight(item)}}>
                  {
                    item.children.map(subItem=>{return this.renderSubItem(subItem)})
                  }
                </ul>
               </li>
            )
          })
        }
      </ul>
    )
  }
}

LeftMenu.propTypes = {
};

export default LeftMenu;
