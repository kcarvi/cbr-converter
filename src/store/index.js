import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valute: []
  },
  mutations: {
    setValute(state, data){
      state.valute = data
    }
  },
  actions: {
    loadValute(){
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => response.json())
        .then(data => {
          let arr = [];
          Object.entries(data.Valute).forEach(item=>{
            arr.push(item[1]);
          })
          this.commit('setValute', arr);
        });
    }
  },
  getters: {
    getValute(state){
      return state.valute
    }
  }
})
