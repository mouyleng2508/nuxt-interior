<template>
  <div class="flex items-center space-x-3 pt-6">
    <img class="w-12 h-12 object-cover rounded-full border p-0.5" :src="profile" alt="Rounded avatar" />
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

<style lang="scss" scoped></style>