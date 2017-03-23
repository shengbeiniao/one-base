import React, { PropTypes } from 'react';
import { Icon } from 'antd';
import LeftMenu from './LeftMenu';
import style from './style/leftNav.scss';

class LeftNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      collapse:false
    }
  }

  componentDidMount() {

  };

  toggle=()=>{
    this.setState(prev=>({
      collapse:!prev.collapse
    }));
  };

  render(){
    const leftNavClass=style.nav+(this.state.collapse?' '+style.toggle:'');
    const iconClass=this.state.collapse?'appstore':'appstore-o';
    return (
      <div className={leftNavClass}>
        <div className={style.top} onClick={this.toggle}>
          <Icon type={iconClass}/>
          <img src={require('./asset/logo.png')}/>
        </div>
        <div className={style.middle}>
          <LeftMenu collapse={this.state.collapse} base={this.props.base}/>
        </div>
        <div className={style.bottom}>
          <div className={style.avatar}>
            <img src={this.props.avatar}/>
          </div>
        </div>
      </div>
    );
  }
}

LeftNav.propTypes = {
};

export default LeftNav;
