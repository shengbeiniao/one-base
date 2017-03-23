import React,{PropTypes} from 'react';
import {connect} from 'dva';
import Header from './Header';
import LeftNav from './LeftNav';
import style from './style/layout.scss';

class Layout extends React.Component{
  constructor(props){
    super(props);
    this.base=props.route.base;
    this.user=props.userProps.currentUser;
  }

  render(){
    return (
      <div className={style.layout}>
        <div className={style.leftNav}>
          <LeftNav avatar={this.user.avatar} base={this.base}/>
        </div>
        <div className={style.main}>
          <div className={style.header}>
            <Header name={this.user.name}/>
          </div>
          <div className={style.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
};


function mapStateToProps({'user':userState }) {
  return { userProps:userState};
}

export default connect(mapStateToProps)(Layout);
