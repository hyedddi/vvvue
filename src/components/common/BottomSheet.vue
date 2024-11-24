<template>
    <div
        class="btmsht-pop"
        :class="btmshtActive"
    >
        <div class="btmsht-cont">
            <slot name="content"></slot>
        </div>
        <div class="btmsht-btn-wrap">
            <CommonBtn />
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

import CommonBtn from '@/components/button/CommonBtn.vue';

const props = defineProps({
    btmshtActive: {
        type: Boolean,
        default: false,
    },
    btmshtBtnSet: {
        text: {
            type: String,
            default: '확인',
        },
        class: {
            type: String,
            default: 'btn-confirm',
        },
        length: {
            type: Number,
            default: 1,
        },
    },
});

const btmshtActive = computed(() => {
    return props.btmshtActive ? 'active' : 'unactive';
});
</script>

<style lang="scss">
.btmsht-pop {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 40rem;
    height: 25rem;
    background: $color-fff;
    border: 0.1rem solid $color-ccc;
    border-radius: 3rem 3rem 0 0;
    transform: translateY(100%);
    transition: transform 0.3s linear;
    z-index: 7000;

    &.unactive {
        transform: translateY(100%);
    }

    &.active {
        transform: translateY(0);
    }
}

.btmsht-btn-wrap {
    display: flex;
    gap: 0.8rem;
    width: 100%;
    padding: 0 1.6rem;
    margin: 2rem 0;
}
</style>
