<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ZoriRow',

  }
</script>

<style scoped lang="scss">
  .row{
    display: flex;
    border: 1px solid #333333;
  }
</style>