import AppConfig from './AppConfig'

const initialState = {
  loading: false,
  snackBar: {
    show: false,
    text: null,
    btnHandler: null,
    type: null
  },
}

export default appReducer = (state = initialState, action) =>{
  switch(action.type){
    case AppConfig.SET_SNACK_BAR:{
      return {
        ...state,
        snackBar: {
          ...state.snackBar,
          ...action.send
        }
      }
    }
    case AppConfig.SET_LOADING:{
      return {
        ...state,
        loading: action.send
      }
    }
    default: {
      return state
    }
  }
}