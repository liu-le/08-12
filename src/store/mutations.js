export default{
    'VIEW_HEAD':(state,payload)=>{state.bHead=payload},
    'VIEW_FOOT':(state,payload)=>{state.bFoot=payload},
    'VIEW_LOADING':(state,payload)=>{state.bLoading=payload},
    'UPDATA_HOME':(state,payload)=>{state.home=payload},
    'UPDATA_BANNER':(state,payload)=>{state.banner=payload},
    'UPDATA_USER':(state,payload)=>{state.user=payload},
    'UPDATA_DETAIL':(state,payload)=>{state.detail=payload}
    
}