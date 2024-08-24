<template>
  <router-link
    :to="`/product/${item.id}`"
    class="flex flex-col gap-3 min-h-max overflow-hidden justify-between hover:shadow-lg transition-all rounded-xl hover:shadow-cyan-500/50"
  >
    <div class="top">
      <img
        class="w-full max-h-80 min-h-80 object-cover mx-auto rounded-lg"
        :src="item.image"
        alt="no image"
      />
      <span class="block font-semibold text-xl truncate">
        {{ item.title }}
      </span>
    </div>
    <div class="bottom">
      <span class="font-semibold text-xl"> {{ item.price }} $ </span>
      <div class="flex justify-end gap-3">
        <vue-feather
          @click.prevent="addFavourites(item)"
          class="cursor-pointer"
          type="heart"
        />
        <vue-feather
          @click.prevent="addCart(item)"
          class="cursor-pointer"
          type="shopping-cart"
        />
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps(["item"]);

const addFavourites = (item) => {
  localStorage.setItem("favourites", JSON.stringify(item));
};
const addCart = (item) => {
  localStorage.setItem("cart", JSON.stringify(item));
};
</script>

<style></style>
