<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" @click="count++">{{ count }}</el-button>
    <el-button type="primary" @click="books.id++">{{ id }}</el-button>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue'
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
