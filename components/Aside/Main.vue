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
@import "./styles.scss";
</style>
