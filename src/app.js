/**
 * CreateDate 2017/03/22
 * Author 张矗
 * Description
 */

'use strict';
import dva from 'dva';
import { browserHistory } from 'dva/router';
import './index.scss';

// 1. Initialize
const app = dva({
  history: browserHistory
});

app.model(require('./model/layoutModel.js'));
app.model(require('./model/userModel.js'));

export default app;
