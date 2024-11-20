<template>
    <div class="dim-layer">
        <slot></slot>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dim-layer {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 400px;
    height: 100%;
    background: $color-d-0004c;
    z-index: 7220;
}
</style>