import Cookies from 'js-cookie';

export default {
  namespace: 'user',

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
    *query({ payload }, { call, put }) {
    }
  },

  reducers: {
    setCurrentUser(state, action) {
      return {...state, ...action.payload};
    },
  }
};
