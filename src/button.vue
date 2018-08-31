<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon :icon="icon"></g-icon>
        <span class="content">
           <slot></slot>
       </span>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(v) {
                    return v === 'left' || v === 'right'
                }
            }
        }
    }
</script>
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        display: inline-flex;
        vertical-align: top;
        justify-content: center;
        align-items: center;
        > .icon {
            order: 1;
            margin-right: 0.1em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.1em;
            }
            > .content {
                order: 1;
            }
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg)
            }
            100% {
                transform: rotate(360deg)
            }
        }
        &.loading > svg{
            animation: spin 1s infinite linear;
        }
    }


</style>