<template>
  <default>
    <p class="slot">
      <Aside />
      <p class="tasks">
        <h2 class="tasks__title">Все задания</h2>
        1
        2
        3
      </p>
    </p>
  </default>
</template>

<script setup lang="ts">
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
  
}

</style>
