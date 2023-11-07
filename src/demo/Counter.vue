<template>
  <button @click="add">Count: {{ count }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Counter',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    add() {
      this.count++
    },
  },
})
</script>
