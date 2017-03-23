import request from './request';
import qs from 'qs';

export default class BaseData{
  constructor(prefix){
    this.prefix=prefix;
  }

  query=(params)=>{
    let url=this.prefix;
    if(params&&Object.keys(params).length>0){
      url=`${this.prefix}?${qs.stringify(params)}`;
    }
    return request(url,{
      method:'get'
    });
  };

  create=(body)=>{
    return request(this.prefix, {
      method: 'post',
      body:JSON.stringify(body)
    });
  };

  remove=(id)=>{
    return request(`${this.prefix}${id}`, {
      method: 'delete'
    });
  };

  update=(body)=> {
    let id=body.id;
    return request(`${this.prefix}${id}`, {
      method: 'put',
      body:JSON.stringify(body)
    });
  };
}
