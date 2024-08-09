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
.modal {
  background: #f3f5f8;
  box-shadow: 0px 16px 36px 0px #0000001f;
  padding: 36px 28px 36px 28px;
  border-radius: 12px;
  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }
  &__textaria {
    padding: 10px 12px;
    margin: 24px 0 16px;
    background: #ffffff;
    border-radius: 8px;
    resize: none;
    width: 100%;
    height: 84px;
  }
  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 16px;
  }
  &__input {
    padding: 10px 12px;
    border-radius: 8px;
  }
  &__checkbox {
    color: #06162e;
    font-size: 12px;
    line-height: 16.8px;
  }
  &__close {
    margin-top: 24px;
  }
}
</style>
