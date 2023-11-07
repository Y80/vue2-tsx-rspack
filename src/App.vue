<template>
  <div>
    <h1>Vue2 + TSX + Rspack</h1>
    <button @click="handleClick">+ 1</button>
    <div>count: {{ count }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function handleClick() {
  count.value++
}
</script>
