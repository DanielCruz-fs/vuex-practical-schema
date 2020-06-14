<template>
  <div class="row">
    <div class="card-columns">
      <div class="card text-dark shadow-sm"
           v-for="item in todos" :key="item.id"
           @dblclick="onDblClick(item)"
           :class="{'bg-success': item.completed}">
        <div class="card-body text-center">
          <p class="card-text">
            {{ item.title }}
          </p>
          <p class="text-center">
            <ion-icon
              id="btn-delete"
              size="large"
              name="trash-outline"
              class="error"
              @click="deleteTodos(item.id)"
            ></ion-icon>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Todos',
  computed: {
    ...mapGetters(['allTodos']),
    todos() {
      return this.allTodos;
    },
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodos', 'updateTodo']),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
#btn-delete {
  cursor: pointer;
}
.error {
  color: #ec213b;
}
</style>
