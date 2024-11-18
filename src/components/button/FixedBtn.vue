<template>
    <div class="add-todo-btn">
        <button type="button">+</button>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.add-todo-btn {
    position: fixed;
    left: calc(50% + 12.5rem);
    bottom: 10vh;
    transform: translateX(-50%);

    button {
        display: block;
        width: 5rem;
        height: 5rem;
        color: #fff;
        background: #505a93;
        border: none;
        border-radius: 100%;
        outline: none;
        font-size: 3rem;
    }
}
</style>
