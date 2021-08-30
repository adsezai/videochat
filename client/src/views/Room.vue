<template>
  <!-- Room {{ $route.params.roomId }} -->
  <h1>Meeting beitreten. {{roomId}}</h1>
  <SelfVideo></SelfVideo>
  <br />
  <input id="nameInput" v-model="state.message" placeholder="Enter your name" />
  <br />
  <button type="button">Join</button>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import SelfVideo from "../components/SelfVideo.vue";

const roomId = useRoute().params.roomId
 
const state = reactive({ message: "" });
</script>

<style scoped>

</style>