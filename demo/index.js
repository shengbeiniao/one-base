import {app} from '../src/index';

import Cookies from 'js-cookie';

//test account
let currentUser={
  name: "三直",
  avatar: "http://shp.qpic.cn/bizmp/PPaumzdsDtdO8TtAHGs0qicqnMsBzBwyW21kPNa68M6nspFPj0Kn9icQ/"
};
Cookies.set('currentUser',JSON.stringify(currentUser));

app.router(require('./router'));
app.start('#root');
