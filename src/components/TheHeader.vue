<template>
  <header class="flex items-center justify-center bg-[#252525] py-2 px-4">
    <div class="flex items-center justify-between w-full container">
      <router-link to="/">
        <img src="@/assets/logo.png" class="max-w-16 w-full" alt="" />
      </router-link>

      <div class="flex items-center gap-3">
        <router-link to="/favourites">
          <vue-feather class="cursor-pointer" type="heart" />
        </router-link>
        <router-link to="/cart">
          <vue-feather class="cursor-pointer" type="shopping-cart" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style></style>
