### 简介

统一中台后台，采用二级导航，为中台类应用提供统一前端Layout和接口，方便子业务系统接入。本项目基于[Ant Design](https://ant.design/)和[Dva](https://github.com/dvajs)开发。

### 功能点
- 统一的layout
- 统一的登录入口
- 提供基础组件库
- 业务系统只需要关心自己的逻辑
- 统一的鉴权机制（暂不提供）
- 统一的消息中心（暂不提供）

### 界面预览

![界面预览](/screenshot.jpg)

### 启动Demo
 
  ```
  $ mkdir one-base
  $ cd one-base
  $ git clone git@github.com:shengbeiniao/one-base.git
  $ npm i
  $ npm start
  ```
访问http://localhost:3000

### 修改菜单项
请修改src/menu.js，支持两级项目结构，图标参考[Font Awesome](http://fontawesome.io/icons/)

### 子项目接入

1. 定义子项目路由
```
import React from 'react';
import {Router} from '../src/index';
import {Route,IndexRedirect} from 'dva/router';
import Hello from './Hello';
//主项目激活路径
let base='demo';
//子项目title
let title='Demo';
//路由信息，支持多级
let dataSource = [
  {
    title: 'Hello',
    path:'hello'
  }
];
//子项目激活路径
let currentPath='hello';

export default function() {
  return (
    <Router base={base} title={title} dataSource={dataSource}  currentPath={currentPath}>
      <Route path="/">
        <IndexRedirect to="hello"/>
        <Route path="hello" component={Hello}/>
      </Route>
    </Router>
  )
};
```
2. 配置model
```
import {app} from '../src/index';
//app为dva对象
//配置model
//配置router
app.router(require('./router'));
//启动
app.start('#root');

```
3. 注意事项

子项目和主项目共用一个dva对象，配置model时，命名空间user已被占用，user存储登录相关状态信息，子项目可以引用。

### 用户管理Demo
此Demo演示如何基于one-base，实现一个完整的用户管理程序，[Demo地址](https://github.com/shengbeiniao/one-starter)


### npm私服
生成环境需要自己配置npm私服的，请参考这篇文章,[CNPM配置指南](https://github.com/cnpm/cnpmjs.org/wiki/CNPM%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%E3%80%90%E5%AE%9E%E6%88%98%E5%A1%AB%E5%9D%91%E3%80%91)

### nginx配置
统一中台中每个业务系统对应一个独立的站点，在使用nginx配置时，可以采用将server_name绑定二级域名的方式，同时修改menu下面的link地址。下面贴出基本的nginx模板代码
```
$ cd /etc/nginx/conf.d
$ vim one.conf

server {
  gzip  on;
  gzip_min_length 1000;
  gzip_proxied    expired no-cache no-store private auth;
  gzip_types      text/plain application/javascript text/css;

  listen 80;
  server_name member.one.com;

  root /var/www/one/member;

  location / {
    root /var/www/one/member;
    try_files $uri /index.html =404;
  }

  location /api/member {
     proxy_pass  http://member.api.com;
     proxy_redirect off;
  }
}
```
