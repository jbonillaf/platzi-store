<template>
  <q-page>
    <div>
      <h4>Detail page</h4>
      {{ product }}
    </div>
    <div class="row">
      <div class="col-auto">
        <q-btn
          rounded
          color="primary"
          @click="goToEditPage(productId)"
          :label="$t('buttons.edit')"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Composables
import { useProduct } from '../composables/useProducts';

// Variables
const route = useRoute();

const { fetchProductById, product, goToEditPage } = useProduct();
const productId = computed(() => Number(route.params.productId as string));

// Lifecycle
onMounted(() => {
  fetchProductById(productId.value);
});
</script>
