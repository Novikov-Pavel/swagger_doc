<template>
  <default>
    <p class="slot">
      <Aside />
      <p class="tasks">
        <h2 class="tasks__title">Все задания</h2>
        <div class="tasks__item">
          <Task v-for="task in tasks" :key="task.title" :task="task" />
        </div>
      </p>
    </p>
  </default>
</template>

<script setup lang="ts">
const tasks = [
  {
    type: 'Дизайн',
    title: 'Сделать креативы для ВК',
    info: 'Сделать креативы в ВК, дешево, под арбитражную тематику Портфолио - обязательно',
    price: '500 руб.',
    deadline: '5 дней',
  },
  {
    type: 'Дизайн',
    title: 'Сделать креативы для ВК',
    info: 'Сделать креативы в ВК, дешево, под арбитражную тематику Портфолио - обязательно',
    price: '500 руб.',
    deadline: '5 дней',
  },
  {
    type: 'Дизайн',
    title: 'Сделать креативы для ВК',
    info: 'Сделать креативы в ВК, дешево, под арбитражную тематику Портфолио - обязательно',
    price: '500 руб.',
    deadline: '5 дней',
  },
  {
    type: 'Дизайн',
    title: 'Сделать креативы для ВК',
    info: 'Сделать креативы в ВК, дешево, под арбитражную тематику Портфолио - обязательно',
    price: '500 руб.',
    deadline: '5 дней',
  },
]
</script>

<style lang="scss">
.slot {
  padding-top: 32px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 48px;
}
.tasks {
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__title {
    font-size: 32px;
    line-height: 38.4px;
    color: #06162E;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

</style>
