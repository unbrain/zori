<template>
  <div class="col" :class="[span &&`span-${span}`, offset && `offset-${offset}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ZoriCol',
    props: {
      span: {
        type: [String, Number],
      },
      offset: {
        type: [String, Number]
      }
    },
  }
</script>

<style scoped lang="scss">
  .col {
    height: 48px;
    border: 1px solid #566C73;
    display: flex;
    width: 50%;
    background-color: #E64C66;
    $class-prefix: span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{
        margin-left: ($n/24)*100%;
      }
    }
  }
</style>