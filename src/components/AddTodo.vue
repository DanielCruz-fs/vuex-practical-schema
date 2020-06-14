<template>
  <div class="row d-flex justify-content-center m-3">
    <form class="form-inline" @submit="submitTodo($event)">
      <label class="sr-only" for="inlineFormInputName2">Add to do</label>
      <input
        v-model="title"
        type="text"
        class="form-control mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="..."/>

      <button type="submit" class="btn btn-primary mb-2">Add Todo</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    submitTodo(e) {
      e.preventDefault();
      this.addTodo(this.title);
      console.log('asdf');
      this.title = null;
    }
  }
};
</script>

<style scoped></style>
