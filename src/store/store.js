import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
Vue.use(Vuex)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVdAD0QYpYkLuydMhqnPkEQbxqI12KHfg",
    authDomain: "loaduser-6daf8.firebaseapp.com",
    databaseURL: "https://loaduser-6daf8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "loaduser-6daf8",
    storageBucket: "loaduser-6daf8.appspot.com",
    messagingSenderId: "470850691992",
    appId: "1:470850691992:web:c35523907e893327b701ed",
    measurementId: "G-T83SS5MXWK"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const collection = db.collection("usuarios")
export const store = new Vuex.Store({
    state:{

        nombre:null,
        edad:null

    },
    getters: {
        getName(state) {
          return state.nombre;
        },
        getEdad(state) {
            return state.edad;
          }

      },
    mutations:{
        addUser(){
            collection.add({
                nombre:this.nombre,
                edad: this.edad
            })
            
        }, setName(state, newName) {
            state.nombre = newName;
          }, setEdad(state, newName) {
            state.edad = newName;
          }
          ,
        updateNombre(state, value){
            this.nombre = value
        },
        updateEdad(state, value){
            this.edad = value
        }
    },
    actions:{
        actionUserAdd(context){
            context.commit('addUser')
        },
        SET_NAME(context, newName) {
            context.commit("setName", newName);
          },
          SET_EDAD(context, newName) {
              context.commit("setEdad", newName);
            }
    }

})