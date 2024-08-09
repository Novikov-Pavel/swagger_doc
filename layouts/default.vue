<template>
  <div class="default-layout">
    <UBreadcrumb divider="•" :links="links">
      <template #default="{ isActive, link }">
        <p :class="isActive ? 'breadcrums' : 'breadcrums'">
          {{ link.label }}
        </p>
      </template>
    </UBreadcrumb>
    <slot />
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Все задания",
  },
  {
    label: "Профиль username",
  },
];
</script>

<style lang="scss">
#__nuxt {
  font-family: Gotham Pro;
}
.default {
  &-layout {
    background-color: #f3f5f8;
    max-width: 1040px;
    padding: 42px 20px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    font-family: Gotham Pro;
  }
}
.breadcrums {
  color: #06162e;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400 !important;
}
</style>
