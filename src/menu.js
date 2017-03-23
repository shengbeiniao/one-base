/**
 * CreateDate 2017/03/23
 * Author 张矗
 * Description
 */

'use strict';

const menu=[
  {
    key:'1',
    title:'中台1',
    children:[{
      key:'1.1',
      title:'会员',
      link:'member',
      icon:'fa fa-user-o'
    },{
      key:'1.2',
      title:'demo',
      link:'demo',
      icon:'fa fa-gears'
    },{
      key:'1.3',
      title:'测试1-3',
      link:'test1-3',
      icon:'fa fa-gears'
    }]
  },
  {
    key:'2',
    title:'中台2',
    children:[{
      key:'2.1',
      title:'测试2-1',
      link:'test2-1',
      icon:'fa fa-gears'
    },{
      key:'2.2',
      title:'测试2-2',
      link:'test2-2',
      icon:'fa fa-gears'
    }]
  }
];

export default menu;
