<template>
  <div>{{ counts }}</div>
  <div>{{ state.name }}</div>
  <div>{{ props.propsName }}</div>
  <button @click="countAdd">on</button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "miniVue",
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
  defineProps,
  defineEmits,
} from "vue";
const props = defineProps({
  propsName: { type: String, default: "propsName1" },
});
let count = ref(0);

let state = reactive({
  name: "test",
});

const counts = computed(() => count.value);

onMounted(() => {
  console.log("mounted!");
  const emit = defineEmits(["propsName"]);
  emit("update:propsName");
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
