import fetch from 'dva/fetch';
import {message} from 'antd';

message.config({
  top: 50,
  duration: 2.5,
});

const prefix='api';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  message.error('服务器异常,请稍后刷新页面');
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function errorHandler(response) {
  if(response.code!=='200'){
    message.error(response.message);
    const error = new Error(response.message);
    error.response = response;
  }
  return response;
}

function postHandler(response) {
  if(response.code==='200'){
    message.success('添加成功');
  }
  return response;
}

function putHandler(response) {
  if(response.code==='200'){
    message.success('更新成功');
  }
  return response;
}

function deleteHandler(response) {
  if(response.code==='200'){
    message.success('删除成功');
  }
  return response;
}

export default function request(url, options) {
  if(options.method==='post'||options.method==='put'){
    options.headers=options.headers||{};
    options.headers['Content-Type']='application/json;charset=UTF-8';
  }
  let promise=fetch(`${prefix}/${url}`, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(errorHandler);
  switch (options.method){
    case 'get':{
      return promise
        .then((result) => ({ result }))
        .catch((err) => ({ err }));
    }
    case 'post':{
      return promise
        .then(postHandler)
        .then((result) => ({ result }))
        .catch((err) => ({ err }));
    }
    case 'put':{
      return promise
        .then(putHandler)
        .then((result) => ({ result }))
        .catch((err) => ({ err }));
    }
    case 'delete':{
      return promise
        .then(deleteHandler)
        .then((result) => ({ result }))
        .catch((err) => ({ err }));
    }
    default:console.error('不支持的方法')
  }
}
