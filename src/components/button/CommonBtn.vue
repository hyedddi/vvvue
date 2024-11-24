<template>
    <button
        type="button"
        @click="btnHandler"
        v-for="{ btn, index } in btns"
        :key="index"
        :class="btn.btnStatus"
    >
        {{ props.text }}
    </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    btmshtBtnSet: {
        text: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            required: true,
        },
        length: {
            type: Number,
            default: 1,
        },
    },
});
</script>

<style lang="scss" scoped>
.bottom-btn {
    width: 100%;
    height: 3.2rem;
    border: 1px solid $color-main;
    font-size: 1.6rem;
    font-weight: $font-w-bold;

    &.btn-cancel {
        color: $color-fff;
        background: $color-main;
    }

    &.btn-confirm {
        color: $color-333;
        background: $color-fff;
    }
}

.top-btn {
    position: absolute;
    padding: 1rem;
    text-indent: -99999px;
}
</style>
