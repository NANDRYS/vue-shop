<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <TheHeader />
  <main
    class="flex justify-center items-start h-full min-h-full grow container py-2 px-4 my-5 mx-auto"
  >
    <RouterView />
  </main>
  <TheFooter />
</template>

<style></style>
