import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)

    function add() {
      count.value++
    }

    return () => <button onClick={add}>Count: {count.value}</button>
  },
})
