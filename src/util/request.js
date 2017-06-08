import fetch from 'dva/fetch';
import {message} from 'antd';

message.config({
  top: 50,
  duration: 2.5,
});

const prefix='/api';

const checkStatus=(response)=>{
  let error='';
  switch (response.status) {
    case 200:{
      return response;
    }
    case 400:{
      error='请求错误!';
      break;
    }
    case 500:{
      error='服务器异常,请稍后刷新页面'
      break;
    }
    default:{
      error=response.statusText
    }
  }
  throw new Error(error);
}

const parseJSON=(response)=>{
  return response.json();
};

export default function request(url, options) {
  if(options.method==='post'||options.method==='put'){
    options.headers=options.headers||{};
    options.headers['Content-Type']='application/json;charset=UTF-8';
  }
  return fetch(`${prefix}/${url}`, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      message.error(err.message);
      return -1;
    });
}
