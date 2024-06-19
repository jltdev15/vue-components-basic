<template>
    <div>
        <button @click="count++">You clicked me {{ count }} times </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)



</script>


<style scoped>
button {
    padding: 1.2rem;
    background-color: green;
    color: #fff;
    font-size: 1.6rem
}

div {
    margin: 0 0.8rem;
}
</style>