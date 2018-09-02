<template>
    <svg v-if="icon" class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        props: ['icon']
    }
</script>

<style scoped lang="scss">
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
