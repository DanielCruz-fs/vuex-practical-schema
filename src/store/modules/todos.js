import axios from 'axios';

/** GENERAL SCHEMA */

/** 
 * STATE 
*/
const state = {
  todos: []
};

/**
 * MUTATIONS
 */
const mutations = {
  'SET_TODOS': (state, todos) => state.todos = todos,
  'NEW_TODO': (state, todo) => state.todos.unshift(todo),
  'DELETE_TODO': (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  'UPDATE_TODO': (state, updTodo) => {
    let index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if(index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

/**
 * ACTIONS
 */
const actions = {
  async fetchTodos({commit}) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(response);
    // Commit to trigger mutation
    commit('SET_TODOS', response.data);
  },
  async addTodo({commit}, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false },
    { 'Content-Type': 'application/json; charset=UTF-8' });
    commit('NEW_TODO', response.data);
  },
  async deleteTodos({commit}, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('DELETE_TODO', id);
  },
  async filterTodos({commit}, e) {
    let limit = parseInt(e.target.value);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    commit('SET_TODOS', response.data);
  },
  async updateTodo({commit}, updTodo) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, { updTodo });
    console.log(response.data.updTodo);
    commit('UPDATE_TODO', response.data.updTodo);
  }
};

/**
 * GETTERS
 */
const getters = {
  allTodos: state => state.todos
};

/**
 * EXPORT DEFAULT ES6
 */
export default {
  state,
  getters,
  actions,
  mutations
};