<template>
  <div></div>
  <div>{{ readOnlyAge }}</div>
  <div>{{ state.name }}</div>
  <button @click="countAdd">on</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "name",
  props: {
    propsName: { type: String, default: "" },
  },
});
</script>
<script setup>
import {
  reactive,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  onErrorCaptured,
} from "vue";

let count = ref(0);

let state = reactive({
  name: "test",
});

const readOnlyAge = computed(() => count.value);

onMounted(() => {
  console.log("mounted!");
});

let countAdd = () => {
  count.value++;
};

watch(
  () => count,
  () => {}
);

// 卸载前
onBeforeUnmount(() => {
  console.log("onBeforeUnmount!");
});

onErrorCaptured(() => {
  console.log("errorCaptured!");
});
</script>

<style scoped lang="scss"></style>
