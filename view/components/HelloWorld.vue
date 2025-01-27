<template>
  <h1>{{ props.msg }}</h1>

  <div class="card">
    <button type="button" @click="Main.count++">count is {{ Main.count }}</button>
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
  <p class="read-the-docs">Click on the Farm and Vue logos to learn more</p>
</template>

<script setup>
import { ref } from 'vue'
import Main from 'Store/main'

const props = defineProps(['msg'])
const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
