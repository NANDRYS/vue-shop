<template>
  <div class="flex flex-col justify-center items-center min-h-60 w-full">
    <h1 class="mr-auto text-[36px] font-bold mb-3 ">{{ product.title }}</h1>

    <ProgressSpinner v-if="pending" />
    <div v-else class="flex justify-between items-start gap-4">
      <img class="rounded" :src="product.image" alt="image" />
      <div class="flex flex-col gap-3 text-justify text-2xl">
        <span> {{ product.description }}</span>
        <span class="flex gap-3 text-xl">
          <vue-feather type="star" stroke="yellow" fill="yellow" />
          {{ product.rating.rate }}
        </span>
        <span> {{ product.price }} $</span>
        <div class="flex justify-end gap-3">
          <vue-feather
            @click.prevent="addFavourites(product)"
            class="cursor-pointer"
            type="heart"
          />
          <vue-feather
            @click.prevent="addCart(product)"
            class="cursor-pointer"
            type="shopping-cart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getProduct } from "@/api/products";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route);

const pending = ref(true);
const product = ref([]);

const getData = async () => {
  pending.value = true;
  try {
    product.value = await getProduct(route.params.id);
    console.log(product.value);
  } catch (e) {
    console.log(e);
  } finally {
    pending.value = false;
  }
};

onMounted(async () => {
  await getData();
});

const addFavourites = (item) => {
  localStorage.setItem("favourites", JSON.stringify(item));
};
const addCart = (item) => {
  localStorage.setItem("cart", JSON.stringify(item));
};
</script>

<style></style>
