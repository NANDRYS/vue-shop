<template>
  <div class="flex flex-col justify-center items-center min-h-60 w-full">
    <h1 class="mr-auto text-[36px] font-bold mb-3">Корзина</h1>

    <ProgressSpinner v-if="pending" />

    <div v-else class="flex flex-wrap justify-center items-start w-full">
      <Product
        class="w-1/4 p-4"
        v-for="product in products"
        :item="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
// import { getProducts } from "@/api/products";
import Product from "@/components/product/ProductItem.vue";

export default {
  setup() {
    const pending = ref(true);
    const products = ref([]);
    onMounted(() => {
      pending.value = true;

      setTimeout(() => {
        const data = localStorage.getItem("cart");
        products.value.push(JSON.parse(data));
        pending.value = false;
      }, 1000);
    });
    return { products, pending };
  },
  components: {
    Product,
  },
};
</script>
