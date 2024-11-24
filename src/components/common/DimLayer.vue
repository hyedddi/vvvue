<template>
    <div
        class="dim-layer"
        v-if="props.dimlayerActive"
    >
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    dimlayerActive: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
.dim-layer {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 400px;
    height: 100%;
    background: $color-dim;
    z-index: 6000;
}
</style>
