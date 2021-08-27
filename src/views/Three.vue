<template>
  <div id="three"></div>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue'
import * as Three from 'three'
export default {
  setup() {
    const count = ref(0)
    const data = 0
    const state = reactive({
      data
    })
    const books = reactive({
      name: '09',
      id: 89
    })
    let { name, id } = toRefs(books)
    console.log(books, name, id)
    return {
      count,
      state,
      books,
      id
    }
  }
}
</script>
