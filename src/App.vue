<script setup>
import ProductCard from './components/ProductCard.vue'


</script>

<template>
  <div>
    <h1>Components Basics - Demo</h1>

    <h1>This components are Global Components</h1>
    <div class="btnContainer">
      <!-- Were using PascalCase for component naming -->
      <ButtonCounter />
      <ButtonCounter />
      <ButtonCounter />
    </div>
    <h1>This components are Local Components</h1>
    <div class="btnContainer">
      <!-- Were using kebabCase for component naming -->
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>

    </div>

  </div>
</template>

<style scoped>
h1,
h2 {
  padding: 20px 10px;
  text-align: center;
}

.btnContainer {
  display: flex;
  padding: 0 3.2rem;
  width: 60rem;
  margin: 0 auto;
}
</style>
