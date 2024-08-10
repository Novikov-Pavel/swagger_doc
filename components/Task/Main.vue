<template>
  <div class="task">
    <div class="task__type">{{ task.type }}</div>
    <div class="task__title">{{ task.title }}</div>
    <div class="task__info">{{ task.info }}</div>
    <div class="task__book">
      <div class="task__price">
        <p>{{ task.price }}</p>
        <p>{{ task.deadline }}</p>
      </div>
      <UButton @click="isOpen = true" class="task__button">
        Взять задачу
      </UButton>
      <UModal v-model="isOpen">
        <ModalMain />
      </UModal>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TaskProps {
  type: string;
  title: string;
  info: string;
  price: string;
  deadline: string;
}
defineProps<{
  task: TaskProps;
}>();
const isOpen = ref<boolean>(false);
</script>

<style lang="scss">
@import "./styles.scss";
</style>
