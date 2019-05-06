import axios from 'axios'
import { Module, GetterTree, ActionTree, MutationTree } from 'vuex'

import RootState from '../../state'
import AdminState from './state'
export default class AdminModule implements Module<AdminState, RootState> {
  namespaced=true
  state: AdminState;

  getters: GetterTree<AdminState, RootState> = {};

  actions: ActionTree<AdminState, RootState> = {};

  mutations: MutationTree<AdminState> = {};

  constructor (initState: AdminState) {
    this.state = {
      msg: 'hello world',
      ...initState
    }
  }
}
