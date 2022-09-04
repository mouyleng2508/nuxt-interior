<template>
  <div class="flex space-x-4 hover:shadow-lg max-w-lg py-8 px-5 rounded-xl">
    <Badge class="text-primary" />

    <div>
      <div class="lg:text-xl text-base font-bold">{{ title }}</div>
      <div class="lg:text-sm text-xs text-primary font-medium lg:pt-5 pt-3">
        {{ subtitle }}
      </div>
    </div>
  </div>
</template>

<script>
import Badge from "@/components/Icons/Badge.vue";
export default {
  components: {
    Badge,
  },
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="scss" scoped>
</style>