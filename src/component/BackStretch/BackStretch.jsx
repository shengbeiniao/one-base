/**
 * CreateDate 2017/01/03
 * Author 张矗
 * Description
 */

'use strict';
import React from 'react';
import style from './backStretch.scss';

class BackStretch extends React.Component{
  constructor(){
    super();
    this.imageWidth=0;
    this.imageHeight=0;
  }

  resize(){
    const body=document.body;
    const bodyWidth=body.clientWidth;
    const bodyHeight=body.clientHeight;
    const bodyScale=bodyWidth/bodyHeight;
    const imageWidth=this.imageWidth;
    const imageHeight=this.imageHeight;
    const imageScale=imageWidth/imageHeight;
    let top=0,left=0,width=0,height=0;
    if(imageScale>=bodyScale){
      height=bodyHeight;
      width=height*imageScale;
      left=(bodyWidth-width)/2;
    }else{
      width=bodyWidth;
      height=width/imageScale;
      top=(bodyHeight-height)/2;
    }
    const img=this.refs['img'];
    img.style.left=left+'px';
    img.style.top=top+'px';
    img.style.width=width+'px';
    img.style.height=height+'px';
  }

  imageLoad(e){
    this.imageWidth=e.target.clientWidth;
    this.imageHeight=e.target.clientHeight;
    setTimeout(()=>{
      this.resize();
    },0);
  }

  componentDidMount(){
    window.addEventListener('resize',this.resize.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('resize',this.resize.bind(this));
  }

  render(){
    return (
      <div className={style.backStretch}>
        <img ref="img" src={require('./image/bg.jpg')} onLoad={this.imageLoad.bind(this)}/>
      </div>
    )
  }
}

export default BackStretch;
