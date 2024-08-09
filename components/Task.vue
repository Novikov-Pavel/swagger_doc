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
          <UButton @click="isOpen = false" class="task__button modal__close">
            Отправить
          </UButton>
        </div>
      </UModal>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false);
const textaria = ref<string>("");
const tel = ref<string>("");
const email = ref<string>("");
const tg = ref<string>("");
const checkbox = ref<boolean>(false);
</script>

<style scoped lang="scss">
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
