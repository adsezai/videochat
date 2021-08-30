<template>
  <video
    :src-object.prop.camel="state.video"
    id="selfVideo"
    autoplay
    playsinline
  />
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({ video: null });

getMediaPermission()
  .then((stream) => (state.video = stream))
  .catch((error) => console.log(error));

function getMediaPermission() {
  return navigator.mediaDevices.getUserMedia({ audio: true, video: true });
}
</script>

<style scoped>
video {
  width: 400px;
  height: 300px;
  border: 1px solid lightgray;
  border-radius: 3px;
}
</style>