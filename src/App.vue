<template>
    <div class="container">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script setup>
import Header from '@/components/common/HeaderLayout.vue';
</script>

<style lang="scss" scoped></style>
