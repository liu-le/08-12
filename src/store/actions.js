import axios from "../plugins/axios";

export default {
    'VIEW_HEAD': ({ commit, state }, payload) => commit('VIEW_HEAD', payload),
    'VIEW_FOOT': ({ commit, state }, payload) => commit('VIEW_FOOT', payload),
    'VIEW_LOADING': ({ commit, state }, payload) => commit('VIEW_LOADING', payload),


    'UPDATA_HOME': ({ commit, state }, payload) => {
        axios({
            url:'/api/home',
           params:{_page:1,_limit:9}
        }).then(
            res=>commit("UPDATA_HOME",res.data.data)
        )
    },
    'UPDATA_BANNER': ({ commit, state }, payload) => {
        axios({
            url:'/api/banner',
           params:{_page:1,_limit:3}
        }).then(
            res=>commit("UPDATA_BANNER",res.data.data)
        )
    },
    'UPDATA_USER': async({ commit, state }, payload) => {
      let res = await axios({url:'/api/user'})
        commit("UPDATA_USER",res.data.data)
        
    },
    'UPDATA_DETAIL': ({ commit, state }, {dataName,id}) =>  {
        axios({
            url:`/api/${dataName}/${id}`,
           params:{_page:1,_limit:5}
        }).then(
            res=>commit("UPDATA_DETAIL",res.data.data)
        )
    }
} 