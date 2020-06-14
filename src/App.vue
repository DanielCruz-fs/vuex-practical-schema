<template>
  <div id="app" class="container">
    <div id="img-container">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <app-addtodo></app-addtodo>
    <app-filtertodos></app-filtertodos>
    <app-todos></app-todos>

  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from  './components/AddTodo.vue';
import FilterTodos from './components/FilterTodos.vue';

export default {
  name: 'App',
  components: {
    'app-todos': Todos,
    'app-addtodo': AddTodo,
    'app-filtertodos': FilterTodos
  }
}
</script>

<style>
#img-container {
  text-align: center;
  margin-top: 60px;
}
</style>
