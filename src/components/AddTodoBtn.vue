<template>
    <div class="add-todo-btn">
        <button type="button">+</button>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.add-todo-btn {
    position: fixed;
    left: calc(50% + 100px);
    bottom: 10vw;
    transform: translateX(-50%);

    button {
        display: block;
        width: 50px;
        height: 50px;
        color: #fff;
        background: #505a93;
        border: none;
        border-radius: 100%;
        outline: none;
        font-size: 30px;
    }
}
</style>
