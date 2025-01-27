<template>
  <h1>{{ main.msg }}</h1>

  <div class="card">
    <button type="button" @click="main.count++">count is {{ main.count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Nohejs and Vue logos to learn more</p>
</template>

<script>
import { useMain } from '@/store';

export default {
  name: 'HelloWorld',
  setup() {
    const main = useMain()
    return { main }
  }
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
