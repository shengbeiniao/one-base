export default {
  namespace: 'base.layout',

  state: {
    isMainCollapse:false,
    isSubCollapse:false,
    contentWidth:window.innerWidth-360,
    currentPath:''
  },

  subscriptions: {
    setup({ dispatch, history }) {
      window.onresize=()=>{
        dispatch({
          type:'setContentWidth'
        })
      }
    },
  },

  effects: {
  },

  reducers: {
    toggle(state, action) {
      return {...state, ...action.payload};
    },
    setContentWidth(state,action){
      let contentWidth=window.innerWidth-360;
      if(state.isMainCollapse){
        contentWidth=contentWidth+130
      }
      if(state.isSubCollapse){
        contentWidth=contentWidth+180;
      }
      return {...state, contentWidth};
    },
    setCurrentPath(state, action) {
      return {...state, ...action.payload};
    }
  }
};
