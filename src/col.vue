<template>
  <div class="col" :class="[span &&`span-${span}`, offset && `offset-${offset}`]"
       :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
    <div style="border: 1px solid #E64C66;">
      <slot></slot>
    </div>
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
        type: [String, Number],
      },
    },
    data () {
      return {
        gutter: 0,
      }
    },
  }
</script>

<style scoped lang="scss">
  .col {
    height: 48px;
    width: 50%;
    $class-prefix: span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
</style>