<template>
    <div class="g-button-group">
        <slot>
        </slot>
    </div>
</template>
<script>
    export default {
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn('button-group childNode must be button')
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .g-button-group {
        display: inline-flex;
        > .g-button {
            &:hover {
                z-index: 1;
            }
            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            border-radius: 0;
        }
    }
</style>