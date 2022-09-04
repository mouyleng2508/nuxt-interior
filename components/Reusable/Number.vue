<template>
  <div>
    <div class="lg:text-4xl text-xl text-primary font-bold">{{ number }}</div>
    <div class="lg:text-sm text-xs text-gray-500 lg:pt-4 pt-2">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
</style>