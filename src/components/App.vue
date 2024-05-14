<script setup>
import { RouterLink, RouterView } from "vue-router";

// Define los datos de los productos
const products = [
  {
    image: "product1.jpg",
    name: "Product 1",
    inventoryStatus: "inStock",
    price: 20,
  },
  {
    image: "product2.jpg",
    name: "Product 2",
    inventoryStatus: "outOfStock",
    price: 30,
  },
];

// Importa cualquier otro código necesario
// Por ejemplo, si necesitas importar una función `getSeverity`, puedes hacerlo aquí
</script>

<template>
  <!--ESTA PARTE REENDERIZA LAS RUTAS-->

  <RouterView />
</template>
