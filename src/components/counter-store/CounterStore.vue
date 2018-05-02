<template>
    <div class="counter-component" v-bind:class="color">
        <h4 class="header">
            {{ title }}
        </h4>
        <div class="count">
            {{ count }}
        </div>
        <div class="button-group">
            <button @click="decrement">-</button>
            <button @click="increment">+</button>
        </div>
    </div>
</template>

<script src="./vue.js">
</script>
<style src="./style.scss" lang="scss" scoped>
</style>
