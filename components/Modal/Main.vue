<template>
  <div class="modal">
    <h2 class="modal__title">Информация по отклику</h2>
    <textarea
      v-model="textaria"
      placeholder="Комментарий"
      class="modal__textaria"
    />
    <div class="modal__inputs">
      <input
        v-model="tel"
        type="tel"
        placeholder="Телефон"
        class="modal__input"
      />
      <input
        v-model="email"
        type="email"
        placeholder="E-mail*"
        class="modal__input"
      />
      <input
        v-model="tg"
        type="text"
        placeholder="Телеграм*"
        class="modal__input"
      />
    </div>
    <UCheckbox v-model="checkbox" name="notifications" color="primary">
      <template #label>
        <span class="modal__checkbox">
          Прошу не звонить и написать мне в мессенджер
        </span>
      </template>
    </UCheckbox>
    <UButton class="task__button modal__close"> Отправить </UButton>
  </div>
</template>

<script setup lang="ts">
const textaria = ref<string>("");
const tel = ref<string>("");
const email = ref<string>("");
const tg = ref<string>("");
const checkbox = ref<boolean>(false);
</script>

<style scopedlang="scss">
@import "./styles.scss";
</style>
