<template>
  <div class="flex flex-col justify-center items-center min-h-60">
    <h1 class="mr-auto text-[36px] font-bold mb-3">Каталог</h1>

    <ProgressSpinner v-if="pending" />

    <div v-else class="flex flex-wrap justify-center items-start w-full">
      <Product
        class="w-full p-4 sm:w-1/3 lg:w-1/4"
        v-for="product in products"
        :item="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getProducts } from "@/api/products";
import Product from "@/components/product/ProductItem.vue";

export default {
  setup() {
    const pending = ref(true);
    const products = ref([]);

    const getData = async () => {
      pending.value = true;

      try {
        const data = await getProducts();

        products.value = data;
      } catch (error) {
        console.log(error);
      } finally {
        pending.value = false;
      }
    };
    onMounted(async () => {
      await getData();
    });
    return { products, pending };
  },
  components: {
    Product,
  },
};
</script>
