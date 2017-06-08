import Cookies from 'js-cookie';

export default {
  namespace: 'base.user',

  state: {
    currentUser: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location)=>{
        if(['/login','/logout','/404'].indexOf(location.pathname)<0){
          let currentUser=Cookies.get('currentUser');
          if(!currentUser||currentUser==='undefined'){
            history.replace('/login');
          }else{
            dispatch({
              type:'setCurrentUser',
              payload:{
                currentUser:JSON.parse(currentUser)
              }
            })
          }
        }
        if(location.pathname==='/logout'){
          Cookies.remove('currentUser');
        }
      });
    },
  },

  effects: {
    *queryCasUser({ payload }, { call, put }) {
      let casUser=JSON.parse(yield getPrivileges(payload.userId));
      let currentUser={};
      currentUser.userName=casUser.userName;
      currentUser.realName=casUser.realName;
      currentUser.email=casUser.email;
      Cookies.set('currentUser', JSON.stringify(currentUser));
      yield  put({
        type:'setCurrentUser',
        payload:{
          currentUser:currentUser
        }
      });
    }
  },

  reducers: {
    setCurrentUser(state, action) {
      return {...state, ...action.payload};
    },
  }
};
