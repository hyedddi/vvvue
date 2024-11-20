<template>
    <div class="btmsht-pop" :class="props.class">
        <div class="btmsht-cont">
            <slot></slot>
        </div>
        <div class="btmsht-btn">
            <button type="button" class="btn-cancel">취소</button>
            <button type="button" class="btn-confirm">확인</button>
            <button type="button" class="btn-close">닫기</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['class']);

</script>

<style>
.btmsht-pop {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 40rem;
    height: 20rem;
    background: #fff;
    border: 0.1rem solid #ccc;
    border-style: dashed;
    border-radius: 2rem 2rem 0 0;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
}

.btmsht-pop.unactive {
    transform: translateY(100%);
}

.btmsht-pop.active {
    transform: translateY(0);
}
</style>