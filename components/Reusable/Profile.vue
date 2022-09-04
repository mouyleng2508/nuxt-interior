<template>
  <div class="flex items-center space-x-3 pt-6">
    <img
      class="w-10 h-10 object-cover rounded-full"
      :src="profile"
      alt="Rounded avatar"
    />
    <div class="">
      <div class="text-base">{{ fullname }}</div>
      <div class="text-xs text-gray-300">{{ position }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullname: String,
    position: String,
    profile: String,
  },
};
</script>

<style lang="scss" scoped>
</style>