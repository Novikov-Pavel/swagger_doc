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
        <Modal />
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
.task {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__type {
    color: #86b836;
    font-size: 14px;
    line-height: 16.8px;
  }
  &__title {
    color: #06162e;
    font-size: 24px;
    line-height: 28.8px;
  }
  &__info {
    font-size: 16px;
    line-height: 22.4px;
  }
  &__price {
    display: flex;
    column-gap: 20px;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }
  &__book {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__button {
    background-color: #f3d147;
    padding: 13px 24px;
    font-size: 16px;
    line-height: 22.4px;
  }
}
@media (max-width: 360px) {
  .task__price {
    flex-direction: column;
    row-gap: 4px;
  } 
}
</style>
