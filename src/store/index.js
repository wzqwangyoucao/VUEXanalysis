import Vue from "vue";
import Vuex from "../vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    a: {
      state: {
        age: 'a8'
      },
      mutations: {
        syncChange() {
          console.log('a ayncChnage')
        }
      },
    },
    b: {
      state: {
        age: 'b9'
      },
      mutations: {
        syncChange() {
          console.log('a ayncChnage')
        }
      },
      modules: {
        c: {
          state: {
            age: 'c9'
          },
          mutations: {
            syncChange() {
              console.log('c ayncChnage')
            }
          },
        },
      }
    },
  },
  state: {
    age: 10
  },
  mutations: {
    syncChange(state, payload) {
      state.age += payload;
    }
  },
  getters: {
    myAge(state) {
      return state.age + 10
    }
  },
  actions: {
    asyncChange({commit}, payload) {
      setTimeout(() => {
        commit('syncChange', payload);
      }, 1000)
    }
  }
});

store.registerModule('d', {
  state: {
    age: 'aged'
  }
})


export default store