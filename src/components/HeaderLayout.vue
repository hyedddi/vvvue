<template>
    <header>
        <p>다 울었니? 이제 할 일을 하자</p>
    </header>
</template>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

header {
    height: 60px;
    color: $color-333;
    border-bottom: 1px solid $color-eee;
    border-style: dashed;
    text-align: center;

    p {
        line-height: 60px;
        font-size: 2.4rem;
        font-weight: $font-w-semibold;
    }
}
</style>
