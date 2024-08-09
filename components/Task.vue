<template>
  <div class="task">
    <div class="task__type">Дизайн</div>
    <div class="task__title">Сделать креативы для ВК</div>
    <div class="task__info">
      Сделать креативы в ВК, дешево, под арбитражную тематику Портфолио -
      обязательно
    </div>
    <div class="task__book">
      <div class="task__price">
        <p>500 руб.</p>
        <p>5 дней</p>
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
    gap: 20px;
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
</style>
