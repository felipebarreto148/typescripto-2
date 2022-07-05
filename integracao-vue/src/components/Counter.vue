<template>
  <div>
    <h1>Contador</h1>
    <h2>{{ valor }}</h2>
    <button @click="() => setValor(10)">-</button>
    <button @click="() => setValor(+10)">+</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      valor: 0,
    };
  },
  methods: {
    setValor(delta: number) {
      this.valor += delta;
    },
  },
});
</script>
