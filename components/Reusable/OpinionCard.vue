<template>
  <div class="bg-primary hover:shadow-2xl rounded-md lg:p-10 p-6 text-white">
    <div class="font-black text-white"><Quote /></div>
    <div
      v-html="title"
      class="lg:text-xl text-base lg:py-5 py-3 font-medium"
    ></div>
    <div class="lg:text-sm text-xs text-gray-300">
      {{ description }}
    </div>
    <Profile :fullname="fullname" :position="position" :profile="profile" />
  </div>
</template>

<script>
import Quote from "~/components/Icons/Quote.vue";
import Profile from "~/components/Reusable/Profile.vue";
export default {
  components: { Quote, Profile },
  props: {
    fullname: String,
    position: String,
    profile: String,
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
</style>