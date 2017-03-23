import React, { PropTypes } from 'react';
import LeftNav from './LeftNav';
import style from './style/admin.scss';

class Admin extends React.Component{
  constructor(props){
    super(props);
    this.title=props.route.title;
    this.dataSource = props.route.dataSource;
    this.currentPath=props.location.pathname.split('/')[1]||props.route.currentPath;
  }

  render(){
    return (
      <div className={style.layout}>
        <div className={style.left}>
          <LeftNav title={this.title} dataSource={this.dataSource} currentPath={this.currentPath}/>
        </div>
        <div className={style.right}>
          <div className={style.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
};

export default Admin;
