<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelect01">Filter</label>
    </div>
    <select class="custom-select" id="inputGroupSelect01" @change="filterTodos($event)">
      <option selected>Choose...</option>
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  /** Here we do not need to use spread operator nor curly braces 'cause we use one method */
  methods: mapActions(['filterTodos'])
};
</script>

<style lang="scss" scoped></style>
