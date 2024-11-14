<template>
    <div
        class="btmsht-pop"
        :class="isActive"
    >
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    activeStatus: {
        type: Boolean,
        default: false,
    }
});

const isActive = computed(() => {
    return props.activeStatus ? 'active' : 'inactive';
});
</script>

<style lang="scss" scoped>
.btmsht-pop {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 400px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    border-style: dashed;
    border-radius: 20px 20px 0 0;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
}

.btmsht-pop.inactive {
    transform: translateY(100%);
}

.btmsht-pop.active {
    transform: translateY(0);
}
</style>