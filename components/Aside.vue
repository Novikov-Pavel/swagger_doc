<template>
  <aside class="aside">
    <img :src="ava" :alt="ava" class="aside__ava" />
    <div class="aside__info">
      <p class="aside__name">{{ name }}</p>
      <div class="aside__username">
        <img :src="iconUser" :alt="iconUser" />
        <p>{{ username }}</p>
      </div>
      <hr class="aside__hr" />
      <div class="aside__socials">
        <img v-for="icon in socials" :key="icon" :src="icon" :alt="icon" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import ava from "~/assets/images/ava.png";
import iconUser from "~/assets/images/icon_user.svg";
import instagram from "~/assets/images/instagram.svg";
import vk from "~/assets/images/vk.svg";
import twitter from "~/assets/images/twitter.svg";
import facebook from "~/assets/images/facebook.svg";

const socials = [instagram, vk, twitter, facebook];
const name = "Титова Елена Николаевна";
const username = "username";
</script>

<style lang="scss">
.aside {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border-radius: 12px;
  padding: 20px 20px 24px 20px;
  background-color: #ffffff;
  &__info {
    flex: 1 1 auto;
  }
  &__username {
    display: flex;
    gap: 8px;
    align-items: center;
    padding-top: 12px;
    font-size: 14px;
    line-height: 19.6px;
  }
  &__name {
    font-size: 18px;
    line-height: 25.2px;
  }
  &__hr {
    color: #4c3536;
    margin: 24px 0;
    width: 100%;
  }
  &__socials {
    display: flex;
    gap: 12px;
    opacity: 30%;
  }

  @media (max-width: 780px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    width: 100%;
    &__ava {
      width: 104px;
      height: 104px;
    }
    &__hr {
      margin: 16px 0;
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 16px;
    width: 100%;
    &__ava {
      width: 104px;
      height: 104px;
    }
    &__hr {
      margin: 16px 0;
      width: 100%;
    }
  }
}
</style>
