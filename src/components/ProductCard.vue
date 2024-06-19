<template>
    <div>
        <h1>Title of the Blog</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illum perferendis rem sapiente aperiam
            reprehenderit vel, quos voluptatum quo. Molestias vel cupiditate rem suscipit optio mollitia ab tempora,
            doloremque veniam!
        </p>
        <p>Author - {{ author }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const author = ref('JLT')

</script>

<style scoped>
div {
    margin: 0 0.8rem;
}
</style>